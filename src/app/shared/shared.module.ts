import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoadingComponent } from './pages/loading/loading.component';
import { Error404Component } from './pages/error404/error404.component';


@NgModule({
  declarations: [
    Error404Component,
    LoadingComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CommonModule,
    LoadingComponent
  ]
})
export class SharedModule { }
