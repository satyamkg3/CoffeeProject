import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DiscountService } from './discount.service';

@Component({
  selector: 'app-discount',
  templateUrl: './discount.component.html',
  styleUrls: ['./discount.component.css']
})
export class DiscountComponent implements OnInit {

  ngOnInit(): void {
  }

  offer:any;
  offerid:any;
  constructor(private service:DiscountService)
  {

  }
  couponById(formData:NgForm)
  {
    let obs = this.service.getCouponById(formData.controls["id"].value);
    obs.subscribe((response)=>{
      this.offerid = response;
      console.log(this.offerid);
    })
  }
  allOffers(formData:NgForm)
  {
    let obs = this.service.getAllOffers();
    obs.subscribe((response)=>{
      this.offer = response;
      console.log(this.offer);
    })
  }
}
