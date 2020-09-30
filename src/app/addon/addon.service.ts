import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AddonService {

  constructor(private http:HttpClient) { }
  getAddonById(id)
  {
    return this.http.get("http://localhost:8086/addon/"+id);
  }

  getAllAddons()
  {
    return this.http.get("http://localhost:8086/addons");
  }
}
