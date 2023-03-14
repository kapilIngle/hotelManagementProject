import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  hotelListUrl: string = 'http://localhost:3000/hotelList/';

  constructor(private apiReq: HttpClient) { }
  
  // trasferring data from :  hotel-list -> edit-hotel
  // hotelEvent = new EventEmitter<any>();

  getHotelList(){
    return this.apiReq.get(this.hotelListUrl)
  }

  // for setting edit flag and edit end point
  editUrl!: string;
  editClicked = false;
  
  idSet(id: number){
    this.editUrl= `${this.hotelListUrl}${id}`;
    this.editClicked = true
  }
  // for patching hotel data
  getHotel(){
    return this.apiReq.get(this.editUrl)
  }

  patchRequest(body: any){
    return this.apiReq.patch(this.editUrl, body)
  }

  postForNewHotel(body: any){
    return this.apiReq.post(this.hotelListUrl,body)
  }

  deleteHotel(id: number){
    return this.apiReq.delete(`${this.hotelListUrl}${id}`)
  }
}
