import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminSigninComponent } from './admin-signin/admin-signin.component';
// angular material
import {MatButtonModule} from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { AdminSuccessComponent } from './admin-success/admin-success.component';



@NgModule({
  declarations: [
    AdminSigninComponent,
    AdminSuccessComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    FormsModule
  ],
  exports: [ ]
})
export class AdminModule { }
