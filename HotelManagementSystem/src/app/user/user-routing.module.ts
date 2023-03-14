import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingFormComponent } from './booking-form/booking-form.component';
import { UserSigninComponent } from './user-signin/user-signin.component';
import { UserSuccessComponent } from './user-success/user-success.component';

const routes: Routes = [
  {path: "", component: UserSigninComponent},
  {path:"userSuccess", component: UserSuccessComponent},
  {path: "booking", component: BookingFormComponent},
  {path: "signup", loadChildren: () => import('../signup/signup.module').then((m => m.SignupModule))},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
