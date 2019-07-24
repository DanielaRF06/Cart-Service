import { Component, OnInit } from '@angular/core';
import { ProductsService} from "../products.service";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  public products;

  constructor( private prodService : ProductsService) { 
    this.products = prodService.products; 
  }//Primer metodo que se inicia

  ngOnInit() {// Se usa cuando el html a sido renderizado(ya se cargo completamente)
  }
  share(){
    alert("El producto se compartió!")
  }

}
