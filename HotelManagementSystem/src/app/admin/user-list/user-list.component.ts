import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  allUsers!: any;
  apiUsersList!: any;

  _searchValue!: string;
  get searchValue(){
    return this._searchValue;
  }
  set searchValue(value: string){
    this._searchValue = value.toLowerCase();
    this.allUsers = this.searchUser();
  }

  constructor(private dataServ: DataService){ }

  ngOnInit(){
    this.dataServ.getUsersList().subscribe((users)=>{
      this.apiUsersList = users;
      this.allUsers = this.apiUsersList;
      console.log(this.allUsers);
    })
    console.log(this.allUsers);
  }

  searchUser(){
    this.allUsers = this.apiUsersList;

    if(this.searchValue === ""){
      return this.apiUsersList
    }else{
      return this.allUsers.filter((user: any)=>{
        return JSON.stringify(user).toLowerCase().includes(this.searchValue);
      })
    }
  }
  


}
