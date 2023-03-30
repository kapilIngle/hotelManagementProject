import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormServiceService } from 'src/app/services/form-service.service';

@Component({
  selector: 'app-signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.scss']
})
export class SignupFormComponent implements OnInit{

  sucessMsg = true;
  notificationOn = true;
  pass!: string;
  cPass!: string;
  match: boolean = false;
  // get pass(){
  //   return this._pass;
  // }
  // set pass(value: string){
  //   this._pass = value;
  //   console.log(this.pass);
  // }

  constructor(private formserv: FormServiceService, private formBuilder: FormBuilder, private router: Router){ }
  
  ngOnInit(){
    this.settingFormData();
    
  }

  signupFormData!: FormGroup;
  settingFormData(){
    this.signupFormData = this.formBuilder.group({
      firstname: ["", [Validators.required, this.nospace]],
      lastname: ["", [Validators.required, this.nospace]],
      mobile: ["", [Validators.required, this.nospace]],
      mail: ["", [Validators.required, Validators.email]],
      uname: ["", [Validators.required, this.nospace]],
      password: ["", [Validators.required, this.nospace]],
      confirmPassword: ["", [Validators.required, this.nospace]],
      gender: ["", Validators.required],
      hobbies: [""],
      
    })
    
    // console.log(this.signupFormData.invalid);
    // this.show = this.signupFormData.invalid;
  }
  
  
  
  // setting up get request
  onSubmitDetails(){
    console.log(this.signupFormData.value);
    console.log(this.signupFormData);
    let formValues = this.signupFormData.value;
    this.formserv.addUsers(formValues).subscribe((userInfo)=>{
      console.log(userInfo);
    }, (err)=> { console.log(err);
    })
    
    this.signupFormData.reset();
    this.sucessMsg = false;
          
  }

  onClickToaster(){
    console.log("toaster");
    
  }

  closerNotification(){
    this.notificationOn = false;
  }

  nospace(control: FormControl){
    if(control.value != null && control.value.indexOf(" ") != -1){
      return {nospace: true};
    }else{
      return null;
    }
  }
  // confirm password functionality
  getPass(passInput: string){
    this.pass = passInput;
    console.log(this.pass);

    if(this.cPass){
      if(this.pass === this.cPass){
        console.log('password matched');
        this.match = true;
        
      }else{
        console.log('password not matched');
        this.match = false;
      }
    }
    
  }
  getCpass(cPassInput: string){
    this.cPass = cPassInput
    
    if(this.pass){
      if(this.pass === this.cPass){
        console.log('password matched');
        this.match = true;
      }else{
        console.log('password not matched');
        this.match = false;
      }
    }
  }


}
