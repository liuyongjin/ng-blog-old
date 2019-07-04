import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PigeonholeComponent } from './pigeonhole.component';


const routes: Routes = [
  { path: '', component: PigeonholeComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PigeonholeRoutingModule { }
