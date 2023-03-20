import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-success',
  templateUrl: './user-success.component.html',
  styleUrls: ['./user-success.component.scss']
})
export class UserSuccessComponent {
  hotelListData!: any;
  apiHotelData!: any;
  selectedHotel: any;
 
  _searchInput!: string;
  get searchInput (){
    return this._searchInput;
  }
  set searchInput(value: string){
    this._searchInput = value;
    this.hotelListData = this.implementingFilter(value);
  }

  constructor(private dataServ: DataService) { }

  ngOnInit(){
    this.dataServ.getHotelList().subscribe((data)=>{
      this.apiHotelData = data;
      this.hotelListData = this.apiHotelData
      console.log(this.hotelListData);
    })
  }

  implementingFilter(inputValue: string){
    this.hotelListData = this.apiHotelData;
    if(inputValue === ""){
      return this.hotelListData;
    }else{
      return this.hotelListData.filter((hotel: any)=>
      {
        // return hotel.hotelName === inputValue;
        return JSON.stringify(hotel).toLowerCase().includes(inputValue);
      })
    }
  }

  displayHotel(id: number){
    this.dataServ.selectedHotel = this.apiHotelData.filter((hotel: any)=>{
      return hotel.id === id
    })
  }

}
