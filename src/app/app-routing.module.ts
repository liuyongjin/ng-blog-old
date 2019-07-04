import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Error404Component } from '@app/shared/pages/error404/error404.component';

const routes: Routes = [
  { path: '', loadChildren: './modules/blog/index/index.module#IndexModule' },
  { path: 'home', loadChildren: './modules/blog/home/home.module#HomeModule' },
  { path: 'pigeonhole', loadChildren: './modules/blog/pigeonhole/pigeonhole.module#PigeonholeModule' },
  { path: 'tag', loadChildren: './modules/blog/tag/tag.module#TagModule' },
  { path: 'about-us', loadChildren: './modules/blog/about-us/about-us.module#AboutUsModule' },
  { path: 'detail/:id', loadChildren: './modules/blog/detail/detail.module#DetailModule' },
  { path: '404', component: Error404Component, pathMatch: 'full' },
  // otherwise redirect to 404
  { path: '**', redirectTo: '/404' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
