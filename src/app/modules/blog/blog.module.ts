import { NgModule } from '@angular/core';

import { BlogRoutingModule } from './blog-routing.module';
import { HomeComponent } from '@blog/home/home.component';
import { AboutUsComponent } from '@blog/about-us/about-us.component';
import { PigeonholeComponent } from '@blog/pigeonhole/pigeonhole.component';
import { SharedModule } from '@app/shared/shared.module';
import { TagComponent } from './tag/tag.component';
import { FormatPipe } from './pipe/format.pipe';
import { TopComponent } from './components/top/top.component';

@NgModule({
  declarations: [HomeComponent, AboutUsComponent, PigeonholeComponent, TagComponent, FormatPipe, TopComponent],
  imports: [
    BlogRoutingModule,
    SharedModule
  ]
})
export class BlogModule { }
