import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModuliComponent } from './moduli.component';
import { RegisterComponent } from '../auth/register/register.component';
import { LoginComponent } from '../auth/login/login.component';

const routes: Routes = [
{ path: '', component: ModuliComponent },
{path: 'register', component: RegisterComponent},
{path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModuliRoutingModule { }
