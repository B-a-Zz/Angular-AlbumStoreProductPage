import{ProductService} from '../product.service'
import{Album} from '../album';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs/observable/from';

@Component({
  selector: 'app-product-tracklisting',
  templateUrl: './product-tracklisting.component.html',
  styleUrls: ['./product-tracklisting.component.css']
})
export class ProductTracklistingComponent implements OnInit {
  albumInfo:Album;
  constructor(private prductService:ProductService) { }

  ngOnInit() {
    this.prductService.getAlbum(1).subscribe(response => this.albumInfo = response);
  }

}
