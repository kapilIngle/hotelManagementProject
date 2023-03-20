import { Component, DoCheck } from '@angular/core';
import { FormServiceService } from './services/form-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements DoCheck{
  title = 'HotelManagementSystem';
  navButton = false;
  
  constructor( private formServ: FormServiceService){ }

  userModuleSelected(){
    let selectedModule = "users";
    this.formServ.moduleNavigation(selectedModule);
  }
  adminModuleSelected(){
    let selectedModule = "admins";
    this.formServ.moduleNavigation(selectedModule);
  }
  ownerModuleSelected(){
    let selectedModule = "owner";
    this.formServ.moduleNavigation(selectedModule);
  }

  ngDoCheck(){
    this.navButton = this.formServ.navButton
  }
}
