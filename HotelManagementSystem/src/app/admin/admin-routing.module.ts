import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';

const routes: Routes = [
  {path: "", component: AdminSigninComponent},
  {path: "signup", loadChildren: ()=> import('../signup/signup.module').then((m => m.SignupModule))}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
