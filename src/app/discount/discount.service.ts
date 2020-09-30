import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DiscountService {

  constructor(private http:HttpClient) { }
  getCouponById(id)
  {
    return this.http.get("http://localhost:8086/offer/"+id);
  }

  getAllOffers()
  {
    return this.http.get("http://localhost:8086/offers");
  }
}
