import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-admin-signin',
  templateUrl: './admin-signin.component.html',
  styleUrls: ['./admin-signin.component.scss']
})
export class AdminSigninComponent {
  interedValue!: any;
  apiData!: any;
  matchFound!: any;
  
  constructor(private formServ: FormServiceService, private router: Router, private toaster: ToastrService){ }

  @ViewChild('signin') signinForm!: NgForm;

  async onSubmit(){
    this.interedValue = this.signinForm.value;
    console.log(this.interedValue);
    this.apiData = await this.formServ.varifySignin().toPromise()    
    console.log(this.apiData)
    this.matchFound = this.apiData.filter((ele:any)=>{
      return (ele.uname == this.interedValue.uname && ele.password == this.interedValue.password)
    })
    console.log(this.matchFound);
    if(this.matchFound.length){
      // alert(`wel-come ${this.matchFound[0].firstname}`);
      this.toaster.success(`wel-come ${this.matchFound[0].firstname}`, `Successfully Loggedin`);
      this.router.navigateByUrl('/admin/adminSuccess')
    }else{
      console.log(`Admin not found`);
      this.toaster.error(`Check your username & password`, `Admin not found`);
      
    }
    // this.apiData.forEach((element:any) => {
    //   if(element.uname == this.interedValue.uname && element.password == this.interedValue.password) {
    //     console.log(`wel-come ${element.firstname}`);
    //   }
    // });
  }
}

