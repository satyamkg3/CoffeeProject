import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SizeService } from './size.service';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {

  ngOnInit(): void {
  }
  size:any;
  sizeid:any;
  constructor(private service:SizeService)
  {

  }
  sizeById(formData:NgForm)
  {
    let obs = this.service.getSizeById(formData.controls["id"].value);
    obs.subscribe((response)=>{
      this.sizeid = response;
      console.log(this.sizeid);
    })
  }
  allSize(formData:NgForm)
  {
    let obs = this.service.getAllSize();
    obs.subscribe((response)=>{
      this.size = response;
      console.log(this.size);
    })
  }
}
