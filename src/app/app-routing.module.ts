import { NgModule } from '@angular/core';
import { RouterModule, Routes, PreloadAllModules } from '@angular/router';
import { Error404Component } from '@app/shared/pages/error404/error404.component';

const routes: Routes = [
  {path: '', loadChildren: './modules/blog/index/index.module#IndexModule'},
  // {path: '', loadChildren: './modules/blog/blog.module#BlogModule'},
  // {path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '404', component: Error404Component },
  // otherwise redirect to 404
  { path: '**', redirectTo: '/404' }
];
@NgModule({
  imports: [RouterModule.forRoot(routes,{ preloadingStrategy:  PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
