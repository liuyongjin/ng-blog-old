import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { HomeComponent } from '@blog/home/home.component';
import { AboutUsComponent } from '@blog/about-us/about-us.component';
import { PigeonholeComponent } from '@blog/pigeonhole/pigeonhole.component';
import { SharedModule } from '@app/shared/shared.module';
import { TagComponent } from './tag/tag.component';
import { FormatPipe } from './pipe/format.pipe';
import { HomeTopComponent } from './components/home-top/home-top.component';
import { DrawerComponent } from './components/drawer/drawer.component';
import { DetailComponent } from './detail/detail.component';
import { FormatRunningTimePipe } from './pipe/format-running-time.pipe';

@NgModule({
  declarations: [HomeComponent, AboutUsComponent, PigeonholeComponent, TagComponent, FormatPipe, HomeTopComponent, DrawerComponent, DetailComponent, FormatRunningTimePipe],
  imports: [
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
