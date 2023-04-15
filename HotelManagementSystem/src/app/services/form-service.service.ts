import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { retryWhen } from 'rxjs';
// import { UserType } from 'src/interface';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  selectedModule!: string;
  userUrl!: string;
  navButton = true;
  
  moduleNavigation(modul: string){
    this.selectedModule = modul;
    console.log(this.selectedModule);
    this.userUrl = `http://localhost:3000/${modul}`;
  }

  // adminUrl = `http://localhost:3000/${this.selectedModule}`;

  constructor(private apiRequest: HttpClient) { }
  
  // adding new user/admin/owner 
  addUsers(user:any){
    return this.apiRequest.post(this.userUrl, user);
  }

  // Checking authentication of user/admin/owner
  varifySignin(){
    console.log(this.userUrl);
    return this.apiRequest.get(this.userUrl)
    
  }

  // AuthGuard or RouteGuard

  authorizedUser: boolean = false;
  onAuthorizedUser(){
    this.authorizedUser = true;
  }

  authorizedOwner: boolean = false;
  onAuthorizedOwner(){
    this.authorizedOwner = true;
  }
  
  authorizedAdmin: boolean = false;
  onAuthorizedAdmin(){
    this.authorizedAdmin = true;
  }

}
