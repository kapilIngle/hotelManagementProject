import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent {
  allOwners!: any;
  
  apiOwnersData!: any;
  _searchValue!: any;
  get searchValue(){
    return this._searchValue;
  }
  set searchValue(value: string){
    this._searchValue = value.toLowerCase();
    this.allOwners = this.searchOwners();
  }

  constructor(private dataServ: DataService){ }

  ngOnInit(){
    this.dataServ.getOwnerList().subscribe((ownersData)=>{
      this.apiOwnersData = ownersData;
      this.allOwners = this.apiOwnersData;
    })
  }

  searchOwners(){
    this.allOwners = this.apiOwnersData;

    if(this.searchValue === ""){
      return this.apiOwnersData;
    }else{
      return this.allOwners.filter((owner: any)=>{
        return JSON.stringify(owner).toLowerCase().includes(this.searchValue);
      })
    }


  }




}
