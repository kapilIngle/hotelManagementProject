import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent {
  allUsers!: any;
  constructor(private dataServ: DataService){ }

  ngOnInit(){
    this.dataServ.getUsersList().subscribe((allUsers)=>{
      this.allUsers = allUsers;
      console.log(this.allUsers);
    })


    console.log(this.allUsers);
    
  }
  


}
