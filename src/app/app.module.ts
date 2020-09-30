import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { AddonComponent } from './addon/addon.component';
import { SizeComponent } from './size/size.component';
import { DiscountComponent } from './discount/discount.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { CoffeeService } from './coffee/coffee.service';
import { OrderComponent } from './order/order.component';


@NgModule({
  declarations: [
    AppComponent,
    CoffeeComponent,
    AddonComponent,
    SizeComponent,
    DiscountComponent,
    OrderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [CoffeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
