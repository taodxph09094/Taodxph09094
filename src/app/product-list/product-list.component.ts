import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { ProductService } from '../product.service';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[];
  selected: Product;
  constructor(
    private productService: ProductService
  ) { }

  ngOnInit():void {
    this.getProducts();
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
  getProducts(){
    this.products = this.productService.getProducts();
    
  }
}