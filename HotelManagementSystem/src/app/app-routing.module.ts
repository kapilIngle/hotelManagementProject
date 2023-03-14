import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  {path: "", component: LandingComponent},
  {path: "home", redirectTo: ""},
  {path: "user", loadChildren: ()=> import('./user/user.module').then((m => m.UserModule))},
  {path: "admin", loadChildren: ()=> import('./admin/admin.module').then((m => m.AdminModule))},
  {path: "owner", loadChildren: ()=> import('./owner/owner.module').then((m => m.OwnerModule))},
  {path: "signup", loadChildren: () => import('./signup/signup.module').then((m => m.SignupModule))},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
