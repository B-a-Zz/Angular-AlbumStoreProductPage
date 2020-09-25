

import { Injectable } from '@angular/core';
import { from } from 'rxjs/observable/from';
import{Http, Response} from '@angular/http'

@Injectable()
export class ProductService {

  constructor(private _http: Http) { }

}
