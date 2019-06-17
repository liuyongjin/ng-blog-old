import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContentComponent } from './components/content/content.component';
import { LeftComponent } from './components/left/left.component';
import { TopComponent } from './components/top/top.component';

import { ErrorComponent } from './pages/error/error.component';
import { LoadingComponent } from './pages/loading/loading.component';

@NgModule({
  declarations: [ErrorComponent, LoadingComponent,ContentComponent,LeftComponent,TopComponent],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
