import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SizeService {

  constructor(private http:HttpClient) { }
  getSizeById(id)
  {
    return this.http.get("http://localhost:8086/size/"+id);
  }

  getAllSize()
  {
    return this.http.get("http://localhost:8086/size");
  }
}
