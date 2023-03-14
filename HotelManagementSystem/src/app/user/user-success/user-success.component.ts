import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-success',
  templateUrl: './user-success.component.html',
  styleUrls: ['./user-success.component.scss']
})
export class UserSuccessComponent {
  hotelListData!: any;

  constructor(private dataServ: DataService) { }

  ngOnInit(){
    this.dataServ.getHotelList().subscribe((data)=>{
      this.hotelListData = data;
      console.log(this.hotelListData);
      
    })
    
  }
}
