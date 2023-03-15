import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
import { AdminSuccessComponent } from './admin-success/admin-success.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { UserListComponent } from './user-list/user-list.component';

const routes: Routes = [
  {path: "", component: AdminSigninComponent},
  {path:"adminSuccess", component: AdminSuccessComponent},
  {path: "hotels", component: HotelListComponent},
  {path: "users", component: UserListComponent},
  {path: "owners", component: OwnerListComponent},
  {path: "signup", loadChildren: ()=> import('../signup/signup.module').then((m => m.SignupModule))}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
