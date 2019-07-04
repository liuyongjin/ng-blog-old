import { NgModule } from '@angular/core';
import { IndexComponent } from '@blog/index/index.component';
import { IndexRoutingModule } from './index-routing.module';
import { SharedModule } from '@app/shared/shared.module';

@NgModule({
  declarations: [IndexComponent],
  imports: [
    SharedModule,
    IndexRoutingModule
  ]
})
export class IndexModule { }
