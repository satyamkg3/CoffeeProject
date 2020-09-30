import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http:HttpClient) { }
  getBill(coffeeid,addonid,sizeid,couponid)
  {
    return this.http.get("http://localhost:8086/placeOrder/"+coffeeid+"?"+addonid+"?"+sizeid+"?"+couponid);
  }
}
