import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { FormServiceService } from '../services/form-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: FormServiceService, private router: Router){ }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.authService.authorizedUser){
      return this.authService.authorizedUser;

    }else if(this.authService.authorizedOwner){
      return this.authService.authorizedOwner;

    }else if(this.authService.authorizedAdmin){
      return this.authService.authorizedAdmin;
      
    }else{
      alert("Access Denied, Please Login First")
      this.router.navigateByUrl("home")  
      return false;
    }

  }
  
}
