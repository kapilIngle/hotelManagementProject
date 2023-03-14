import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
  constructor(private formserv: FormServiceService, private formBuilder: FormBuilder, private router: Router){ }
  
  ngOnInit(){
    this.settingFormData();
  }

  signupFormData!: FormGroup;
  settingFormData(){
    this.signupFormData = this.formBuilder.group({
      firstname: ["", Validators.required],
      lastname: ["", Validators.required],
      mobile: ["", Validators.required],
      mail: ["", [Validators.required, Validators.email]],
      uname: ["", Validators.required],
      password: ["", Validators.required],
      confirmPassword: ["", Validators.required],
      gender: ["", Validators.required],
      hobbies: [""],
      
    })
    
    // console.log(this.signupFormData.invalid);
    // this.show = this.signupFormData.invalid;
  }
  
  
  
  // setting up get request
  onSubmitDetails(){
    console.log(this.signupFormData.value);
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

}
