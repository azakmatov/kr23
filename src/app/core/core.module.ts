import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {OrderService} from "../shared/services/order.service";
import {ProductService} from "../shared/services/product.service";
import {ProductsService} from "../shared/services/products.service";

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    OrderService,
    ProductService,
    ProductsService
  ]
})
export class CoreModule { }
