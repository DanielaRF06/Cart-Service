import { Component, OnInit } from '@angular/core';
import { ActivatedRoute} from "@angular/router";

import { CartService } from "../cart.service" ;
import { ProductsService } from "../products.service";
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
 
  public products;
  public product;
  constructor(private route: ActivatedRoute,
              private cartService : CartService,
              private productService : ProductsService ) { 
    this.products = productService.products;
  }

  ngOnInit() {
    //obtiene el id del producto seleccionado
    this.route.paramMap.subscribe(
      params => {
        this.product = this.products[+params.get('productId')];
      }
    ); // Se hace una peticion 
  }

  addToCart(product){
    this.cartService.addToCart(product); 
    alert("Se añadio al carrito"+ JSON.stringify(this.cartService.getItems()));
  }

}
