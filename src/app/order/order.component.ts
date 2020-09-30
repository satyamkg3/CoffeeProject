import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { OrderService } from './order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})
export class OrderComponent implements OnInit {

  orderid:any;
  constructor(private service:OrderService)
  {

  }
  bill(formData:NgForm)
  {
    let obs = this.service.getBill(formData.controls["coffeeid"].value,formData.controls["addonid"].value,formData.controls["sizeid"].value,formData.controls["couponid"].value);
    obs.subscribe((response)=>{
      this.orderid = response;
      console.log(this.orderid);
    })
  }

  ngOnInit(): void {
  }

}
