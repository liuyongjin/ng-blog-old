import { NgModule } from '@angular/core';
import { NgZorroAntdModule} from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
  ],
  imports: [
    NgZorroAntdModule,
    TranslateModule,
    CommonModule,
  ],
  exports: [
    NgZorroAntdModule,
    TranslateModule,
    CommonModule
  ]
})
export class SharedModule { }
