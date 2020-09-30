import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AddonService } from './addon.service';

@Component({
  selector: 'app-addon',
  templateUrl: './addon.component.html',
  styleUrls: ['./addon.component.css']
})
export class AddonComponent implements OnInit {

  addon:any;
  constructor(private service:AddonService) { }

  ngOnInit(): void {
  }

  addonById(formData:NgForm)
  {
    let obs = this.service.getAddonById(formData.controls["id"].value);
    obs.subscribe((response)=>{
      this.addon = response;
      console.log(this.addon);
    })
  }
  addons(formData:NgForm)
  {
    let obs = this.service.getAllAddons();
    obs.subscribe((response)=>{
      this.addon = response;
      console.log(this.addon);
    })
  }

}
