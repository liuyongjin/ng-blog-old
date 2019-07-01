import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from '@blog/home/home.component';
import { AboutUsComponent } from '@blog/about-us/about-us.component';
import { PigeonholeComponent } from '@blog/pigeonhole/pigeonhole.component';
import { TagComponent } from '@blog/tag/tag.component';
import { DetailComponent } from '@blog/detail/detail.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about-us', component: AboutUsComponent },
  { path: 'pigeonhole', component: PigeonholeComponent },
  { path: 'detail/:id', component: DetailComponent },
  { path: 'tag', component: TagComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }

