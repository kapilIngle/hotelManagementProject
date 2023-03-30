import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-booking-form',
  templateUrl: './booking-form.component.html',
  styleUrls: ['./booking-form.component.scss']
})
export class BookingFormComponent {
  hide = true;
  hotelTobeBooked!: any;
  hotelName!: string;
  bookingFormData!: FormGroup;

  constructor(private formbuild: FormBuilder, private dataServ: DataService, private router: Router, private toaster: ToastrService){ }

  ngOnInit(){
    this.settingBookingForm();
    this.hotelTobeBooked = this.dataServ.selectedHotel;
    // this.hotelName = this.hotelTobeBooked.hotelName
    console.log(this.hotelTobeBooked);
    
  }
  ngAfterViewInit(){
    // this.settingBookingForm();
  }

  settingBookingForm(){
    this.bookingFormData = this.formbuild.group({
      fname: ["", [Validators.required, this.nospace]],
      lname: ["", [Validators.required, this.nospace]],
      email: ["", [Validators.required, Validators.email]],
      mobile: ["", [Validators.required, this.nospace]],
      arrivalDate: [""],
      departureDate: [""],
      guests: [1],
      address: [""],
      city: [""],
      state: [""],
      pin: [""],
      paymentMethod: ["upi"]
    })
  }

  onSubmit(){
    console.log(this.bookingFormData);
    console.log(this.bookingFormData.value);
    // alert("Hotel Booked Successfully");
    this.toaster.success(`Hotel Booked`,`Successful`)
    this.router.navigateByUrl('/user/userSuccess');
  }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }
  // getNospaceErrorMessage() {
  //   if (this.fname.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.fname.hasError('nospace') ? '' : 'No space allowed';
  // }

  nospace(control: FormControl){
    if(control.value != null && control.value.indexOf(" ") != -1){
      return {nospace : true};
      // return null;
      
    }else{
      return null;
      // return {nospace : true};
    }
  }

 
}
