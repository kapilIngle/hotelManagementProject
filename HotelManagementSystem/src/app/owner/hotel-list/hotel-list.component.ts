import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.scss']
})
export class HotelListComponent {
  hotelListData!: any;
  apiHotelData: any;
  // search logic
  _searchValue!:string;
  get searchValue(){
    return this._searchValue
  }
  set searchValue (value: string){
    this._searchValue = value.toLowerCase();
    this.hotelListData = this.searchHotels()
  }

  constructor(private dataServ: DataService, private router: Router){ }

  ngOnInit(){
    this.dataServ.getHotelList().subscribe((list)=>{
      this.apiHotelData = list;
      this.hotelListData = this.apiHotelData;
      console.log(this.hotelListData);
      
    })
  }

  editHotel(id: number){

  // getting hotel data according to id
    console.log(id);
    this.dataServ.idSet(id);
    
  }
  // delete selected hotel
  deleteHotel(id: number){
    if(confirm("Do you really want to delete this Hotel ?...")){
      this.dataServ.deleteHotel(id).subscribe()
      console.log("Hotel deleted Succesfully");
      this.router.navigateByUrl("/owner/ownerSuccess")
      
    }else{
      console.log("Hotel not deleted");
      
    }
  }
  // search logic
  searchHotels(){
    this.hotelListData = this.apiHotelData;

    if(this.searchValue === ""){
      return this.hotelListData = this.apiHotelData
    }else{
      return this.hotelListData.filter((hotel: any)=>{
        return JSON.stringify(hotel).toLowerCase().includes(this.searchValue)
      })
    }
  }


}
