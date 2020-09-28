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
products:Product[];
  constructor( private  productService: ProductService) { }

  ngOnInit() {
    this.productService.getProduct().subscribe(response => this.products= response)
  }

}
