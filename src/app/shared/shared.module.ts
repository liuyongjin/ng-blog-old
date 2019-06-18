import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LeftComponent } from './components/left/left.component';
import { TopComponent } from './components/top/top.component';
import { LoadingComponent } from './pages/loading/loading.component';
import { Error404Component } from './pages/error404/error404.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    Error404Component,
    LoadingComponent, 
    LeftComponent, 
    TopComponent
  ],
  imports: [
    RouterModule,
    CommonModule
  ],
  exports: [
    CommonModule,
    LoadingComponent,
    LeftComponent,
    TopComponent
  ]
})
export class SharedModule { }
