import { ProductService } from './../product.service';
import { Product } from './../product';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/observable/from';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
product:Product[];
  constructor( private  productService: ProductService) { }

  ngOnInit() {
  }

}
