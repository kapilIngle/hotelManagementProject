import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-user-signin',
  templateUrl: './user-signin.component.html',
  styleUrls: ['./user-signin.component.scss']
})
export class UserSigninComponent {
  interedValue!: any;
  apiData!: any;
  matchFound!: any;
  @ViewChild('signin') signinForm!: NgForm
  
  constructor(private formServ: FormServiceService, private router: Router, private toaster: ToastrService){ }

  async onSubmitSignin(){
    this.interedValue = this.signinForm.value;
    console.log(this.interedValue);
    this.apiData = await this.formServ.varifySignin().toPromise()    
    console.log(this.apiData)
    this.matchFound = await this.apiData.filter((ele:any) =>{
      return ele.uname == this.interedValue.uname && ele.password == this.interedValue.password
    })
    console.log(this.matchFound);
    if(this.matchFound.length){
      // alert(`wel-come ${this.matchFound[0].firstname}`);
      this.toaster.success(`wel-come ${this.matchFound[0].firstname}`,`Successfully Loggedin`);
      // authorization
      this.formServ.onAuthorizedUser();
      // navigation
      this.router.navigateByUrl('/user/userSuccess')
    }else{
      // alert(`User not found`);
      this.toaster.error(`Check your username & password`, `User not found`)
      
    }
    
    // this.matchFound = this.apiData.forEach((element:any) => {
    //   if(element.uname == this.interedValue.uname && element.password == this.interedValue.password) {
    //     console.log(`wel-come ${element.firstname}`);
    //   }
    // });
  }
  
  
}

