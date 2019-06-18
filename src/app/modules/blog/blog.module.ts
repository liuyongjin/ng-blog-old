import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { HomeComponent } from '@blog/home/home.component';
import { AboutUsComponent } from '@blog/about-us/about-us.component';
import { PigeonholeComponent } from '@blog/pigeonhole/pigeonhole.component';
@NgModule({
  declarations: [HomeComponent, AboutUsComponent, PigeonholeComponent],
  imports: [
    BlogRoutingModule
  ]
})
export class BlogModule { }
