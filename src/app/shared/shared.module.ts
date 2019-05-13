import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './pages/error/error.component';
import { LoadingComponent } from './pages/loading/loading.component';

@NgModule({
  declarations: [ErrorComponent, LoadingComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
