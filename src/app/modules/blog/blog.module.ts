import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { PigeonholeComponent } from './pigeonhole/pigeonhole.component';

@NgModule({
  declarations: [HomeComponent, AboutUsComponent, PigeonholeComponent],
  imports: [
    CommonModule
  ]
})
export class BlogModule { }
