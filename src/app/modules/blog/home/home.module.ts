import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { HomeTopComponent } from '../components/home-top/home-top.component';
import { FormatRunningTimePipe } from '../pipe/format-running-time.pipe';


@NgModule({
  declarations: [HomeComponent,HomeTopComponent,FormatRunningTimePipe],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
