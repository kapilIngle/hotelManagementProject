import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-owner-success',
  templateUrl: './owner-success.component.html',
  styleUrls: ['./owner-success.component.scss']
})
export class OwnerSuccessComponent {

  constructor(private dataServ: DataService){ }

  newHotelFlag(){
    this.dataServ.editClicked = false;
  }
}
