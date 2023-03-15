import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent {
  allOwners!: any;
  constructor(private dataServ: DataService){ }

  ngOnInit(){
    this.dataServ.getOwnerList().subscribe((allOwners)=>{
      this.allOwners = allOwners;
    })
  }
}
