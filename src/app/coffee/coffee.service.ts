import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoffeeService {

  constructor(private http:HttpClient) { }
  getCoffeeById(id)
  {
    return this.http.get("http://localhost:8086/coffee/"+id);
  }

  getAllCoffee()
  {
    return this.http.get("http://localhost:8086/coffees");
  }
}
