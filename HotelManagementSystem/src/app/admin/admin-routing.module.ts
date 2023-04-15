import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminSuccessComponent } from './admin-success/admin-success.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { UserListComponent } from './user-list/user-list.component';
import { AuthGuard } from '../auth-guard/auth.guard';

const routes: Routes = [
  {path: "", component: AdminSigninComponent},
  {path:"adminSuccess", component: AdminSuccessComponent, canActivate:[AuthGuard]},
  {path: "hotels", component: HotelListComponent, canActivate:[AuthGuard]},
  {path: "users", component: UserListComponent, canActivate:[AuthGuard]},
  {path: "owners", component: OwnerListComponent, canActivate:[AuthGuard]},
  {path: "signup", loadChildren: ()=> import('../signup/signup.module').then((m => m.SignupModule))}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
