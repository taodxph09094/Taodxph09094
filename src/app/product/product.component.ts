import { Component, OnInit } from '@angular/core';
import value from '*.json';
import { Product } from '../Product';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  // product : Product = {
  //   // name:  "Item 1",
  //   // price:  25.99,
  //   // desc: "Nội dung mô tả sản phẩm",
  //   // img: "http://placehold.it/700x400",
  //   // status: true
  // }
  // changeStatus(){
  //   this.product.status = false;
  // }
  changeTitle(e){
    // this.product.name = e.target.value;
   
  }
}