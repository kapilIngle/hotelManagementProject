import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-edit-hotel',
  templateUrl: './edit-hotel.component.html',
  styleUrls: ['./edit-hotel.component.scss']
})
export class EditHotelComponent {
  hotel!: any;
  edit = false;
  hotelDetailsForm!: FormGroup;

  constructor(private dataServ: DataService, private formBuilder: FormBuilder, private router: Router){ }

  ngOnInit(){
  
  // setting form
    this.setHotelDetails()
    this.try1();
  }
  
  setHotelDetails(){
    this.hotelDetailsForm = this.formBuilder.group({
      hotelName: [""],
      rating: [""],
      price: [""],
      roomSiz: [""],
      roomDis: [""],
      address: [""],
      availability: [""],
      image: [""],
    })
    // console.log(this.hotel);

  }

  async try1(){
    
    if(this.dataServ.editClicked){
      this.hotel = await this.dataServ.getHotel().toPromise()
      console.log(this.hotel);
      this.edit = this.dataServ.editClicked;
    }

    if(this.edit){
      this.hotelDetailsForm.patchValue({
        hotelName: this.hotel.hotelName,
        rating: this.hotel.rating,
        price: this.hotel.price,
        roomSiz: this.hotel.roomSiz,
        roomDis: this.hotel.roomDis,
        address: this.hotel.address,
        availability: this.hotel.availability,
        image: this.hotel.image,
      })
    }else{
      console.log("edit falg not set");
    }

  }

  onSubmit(){
    console.log(this.hotelDetailsForm.value);
  }

  saveEdit(){
    this.dataServ.patchRequest(this.hotelDetailsForm.value).subscribe((editedHotel)=>{
      console.log(editedHotel);
    })
    alert("Changes saved");
    this.router.navigateByUrl("/owner/ownerSuccess");
  }

  newHotelRegister(){
    this.dataServ.postForNewHotel(this.hotelDetailsForm.value).subscribe();
    alert("New hotel registered");
    this.router.navigateByUrl("/owner/ownerSuccess");
  }


}
