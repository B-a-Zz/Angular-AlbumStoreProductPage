import { ProductService } from './../product.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/observable/from';


@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css']
})
export class ProductDescriptionComponent implements OnInit {

  constructor(private _productService: ProductService) { }

  ngOnInit() {
  }

}
