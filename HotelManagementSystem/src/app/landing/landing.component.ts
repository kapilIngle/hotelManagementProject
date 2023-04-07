import { Component } from '@angular/core';
import { FormServiceService } from '../services/form-service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {

  images = ["../../assets/hotel-list-3.jpg", "../../assets/hotel-list-4.jpg", "../../assets/hotel-list-5.jpg"];

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

  ngOnInit(){
    this.formServ.navButton = false;
  }

  ngOnDestroy(){
    this.formServ.navButton = true;
  }

}
