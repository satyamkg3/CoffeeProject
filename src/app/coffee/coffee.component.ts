import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CoffeeService } from './coffee.service';

@Component({
  selector: 'app-coffee',
  templateUrl: './coffee.component.html',
  styleUrls: ['./coffee.component.css']
})
export class CoffeeComponent implements OnInit {

  ngOnInit(): void {
  }

  coffee:any;
  coffeeid:any;
  constructor(private service:CoffeeService)
  {

  }
  coffeeById(formData:NgForm)
  {
    let obs = this.service.getCoffeeById(formData.controls["id"].value);
    obs.subscribe((response)=>{
      this.coffeeid = response;
      console.log(this.coffeeid);
    })
  }
  coffees(formData:NgForm)
  {
    let obs = this.service.getAllCoffee();
    obs.subscribe((response)=>{
      this.coffee = response;
      console.log(this.coffee);
    })
  }
}
