import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
  ],
  imports: [
    NgZorroAntdModule,
    TranslateModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    NgZorroAntdModule,
    TranslateModule,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule { }
