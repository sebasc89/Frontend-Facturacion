import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import { environment } from '../../../../environments/environment';
import { BaseService } from '../base.service';
import { Router } from '@angular/router';
import { ProductModel } from '../../models/product.model';

@Injectable()
export class ProductService  extends BaseService<ProductModel> {

    private apiURL: string;

    constructor(protected _http: HttpClient, private _router: Router) {
        super(_http, environment.apiGatewayURL);
        this.apiURL = environment.apiGatewayURL;
    }
}
