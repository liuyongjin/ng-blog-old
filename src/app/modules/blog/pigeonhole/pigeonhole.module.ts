import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';
import { PigeonholeRoutingModule } from './pigeonhole-routing.module';
import { PigeonholeComponent } from './pigeonhole.component';
// import { FormatPipe } from '../pipe/format.pipe';


@NgModule({
  declarations: [PigeonholeComponent],
  imports: [
    SharedModule,
    PigeonholeRoutingModule
  ]
})
export class PigeonholeModule { }
