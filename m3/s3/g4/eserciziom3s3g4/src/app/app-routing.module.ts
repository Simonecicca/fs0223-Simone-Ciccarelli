import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{pathMatch: "full", path: '', redirectTo: '/auth'},{ path: 'moduli', loadChildren: () => import('./moduli/moduli.module').then(m => m.ModuliModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
