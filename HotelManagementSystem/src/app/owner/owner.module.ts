import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OwnerRoutingModule } from './owner-routing.module';
import { OwnerSigninComponent } from './owner-signin/owner-signin.component';
// angular material
import {MatButtonModule} from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnerSuccessComponent } from './owner-success/owner-success.component';
import { HotelListComponent } from './hotel-list/hotel-list.component';
import { EditHotelComponent } from './edit-hotel/edit-hotel.component';



@NgModule({
  declarations: [
    OwnerSigninComponent,
    OwnerSuccessComponent,
    HotelListComponent,
    EditHotelComponent
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    MatButtonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class OwnerModule { }
