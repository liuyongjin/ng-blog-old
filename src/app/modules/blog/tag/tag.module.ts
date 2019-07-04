import { NgModule } from '@angular/core';
import { SharedModule } from '@app/shared/shared.module';
import { TagRoutingModule } from './tag-routing.module';
import { TagComponent } from './tag.component';
import { DrawerComponent } from '../components/drawer/drawer.component';

@NgModule({
  declarations: [TagComponent,DrawerComponent],
  imports: [
    SharedModule,
    TagRoutingModule
  ]
})
export class TagModule { }
