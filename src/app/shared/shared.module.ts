import { NgModule } from '@angular/core';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from '@blog/components/search/search.component';
import { LeftComponent } from '@app/shared/components/left/left.component';
import { TopComponent } from '@app/shared/components/top/top.component';
import { ContentComponent } from '@app/shared/components/content/content.component';
import { Error404Component } from '@app/shared/pages/error404/error404.component';
import { ParticlesModule } from 'angular-particle';
import { FormatPipe } from '@blog/pipe/format.pipe';

@NgModule({
  declarations: [
    SearchComponent,
    LeftComponent,
    TopComponent,
    Error404Component,
    ContentComponent,
    FormatPipe
  ],
  imports: [
    RouterModule,
    ParticlesModule,
    NgZorroAntdModule,
    TranslateModule,
    CommonModule,
    FormsModule
  ],
  exports: [
    ParticlesModule,
    SearchComponent,
    LeftComponent,
    TopComponent,
    ContentComponent,
    Error404Component,
    NgZorroAntdModule,
    TranslateModule,
    CommonModule,
    FormsModule,
    FormatPipe
  ]
})
export class SharedModule { }
