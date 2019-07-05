import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';

import { MarkedPipe } from '@blog/pipe/marked.pipe';

import { DetailRoutingModule } from './detail-routing.module';
import { DetailComponent } from './detail.component';


@NgModule({
  declarations: [DetailComponent,MarkedPipe],
  imports: [
    SharedModule,
    DetailRoutingModule
  ]
})
export class DetailModule { }
