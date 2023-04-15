import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditHotelComponent } from './edit-hotel/edit-hotel.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { OwnerSigninComponent } from './owner-signin/owner-signin.component';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { AuthGuard } from '../auth-guard/auth.guard';

const routes: Routes = [
  {path: "", component: OwnerSigninComponent},
  {path: "ownerSuccess", component: OwnerSuccessComponent, canActivate:[AuthGuard]},
  {path: "hotelList", component: HotelListComponent, canActivate:[AuthGuard]},
  {path: "editHotel", component: EditHotelComponent, canActivate:[AuthGuard]},
  {path: "signup", loadChildren: () => import('../signup/signup.module').then((m => m.SignupModule))},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
