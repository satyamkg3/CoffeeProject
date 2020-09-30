import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddonComponent } from './addon/addon.component';
import { CoffeeComponent } from './coffee/coffee.component';
import { DiscountComponent } from './discount/discount.component';
import { OrderComponent } from './order/order.component';
import { SizeComponent } from './size/size.component';


const routes: Routes = [
  {path:'showCoffee', component:CoffeeComponent},
  {path:'showAddOn',component:AddonComponent},
  {path:'showSize', component:SizeComponent},
  {path:'showDiscount', component:DiscountComponent},
  {path:'showOrder', component:OrderComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
