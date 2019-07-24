import { Component, OnInit, EventEmitter, Input,Output } from '@angular/core';
//import {   } from 'events';

@Component({
  selector: 'app-product-alert',
  templateUrl: './product-alert.component.html',
  styleUrls: ['./product-alert.component.css']
})
export class ProductAlertComponent implements OnInit {

  @Input() product;
  @Output() notify= new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
