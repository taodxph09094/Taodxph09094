import { Component, OnInit } from '@angular/core';
import { data } from '../MockData';
import { Product } from '../Product';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products = data;
  selected: Product;
  constructor() { }

  ngOnInit():void {
  }
  
  removeItem(id1){
    // this.products = this.products.filter(product => product.id != id);
    this.products = this.products.filter(function(val){
  return val.id != id1.id;
});
  }
  showDetail(product){
    this.selected = product;
  }

}