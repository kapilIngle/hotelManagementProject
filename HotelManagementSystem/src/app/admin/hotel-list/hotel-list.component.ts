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

  deleteHotel(id: number){
    console.log(id);
    if(confirm('Do you really want to delete this Hotel ?')){
      this.dataServ.deleteHotel(id).subscribe();

      this.router.navigateByUrl("/admin/adminSuccess")
    }else{
      console.log("Hotel not deleted");
      
    }
  }

}
