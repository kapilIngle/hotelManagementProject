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

  constructor(private dataServ: DataService, private router: Router){ }

  ngOnInit(){
    this.dataServ.getHotelList().subscribe((list)=>{
      this.hotelListData = list;
      console.log(this.hotelListData);
      
    })
  }

  editHotel(id: number){

  // getting hotel data according to id
    console.log(id);
    this.dataServ.idSet(id);
    
  }

  deleteHotel(id: number){
    if(confirm("Do you really want to delete this Hotel ?...")){
      this.dataServ.deleteHotel(id).subscribe()
      console.log("Hotel deleted Succesfully");
      this.router.navigateByUrl("/owner/ownerSuccess")
      
    }else{
      console.log("Hotel not deleted");
      
    }
  }


}
