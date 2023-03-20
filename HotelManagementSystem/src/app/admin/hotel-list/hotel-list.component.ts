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
  
  // search functionality
  apiHotelData!: any;
  _searchValue!: string;
  get searchValue(){
    return this._searchValue;
  }
  set searchValue(value: string){
    this._searchValue = value.toLowerCase();
    this.hotelListData = this.searchHotels();
  }

  constructor(private dataServ: DataService, private router: Router){ }

  ngOnInit(){
    this.dataServ.getHotelList().subscribe((list)=>{
      this.apiHotelData = list;
      this.hotelListData = this.apiHotelData;
      console.log(this.hotelListData);
      
    })
  }

  deleteHotel(id: number){
    console.log(id);
    if(confirm('Do you really want to delete this Hotel ?')){
      this.dataServ.deleteHotel(id).subscribe();

      this.router.navigateByUrl("/admin/adminSuccess")
    }else{
      console.log("Hotel not deleted");
      
    }
  }

  // search functionality
  searchHotels(){
    this.hotelListData = this.apiHotelData;
    if(this.searchValue === ""){
      return this.hotelListData = this.apiHotelData;
    }else{
      return this.hotelListData.filter((hotel: any)=>{
        return JSON.stringify(hotel).toLowerCase().includes(this.searchValue)
      })
    }

    
  }


}
