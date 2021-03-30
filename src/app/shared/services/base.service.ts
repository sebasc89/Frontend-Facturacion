import { Injectable } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { environment } from '../../../environments/environment';
import { ResponseModel } from '../models/common/response.model';
import { HeadersConfig } from '../../config/headers';
import { HttpClient } from '@angular/common/http';
import { PaginationModel } from '../models/common/pagination.model';
import { DeleteModel } from '../models/common/delete.model';
import { PaginatioResponseModel } from '../models/common/pagination-response.model';

export abstract class BaseService<TModel> {

    public headersConfig: HeadersConfig = new HeadersConfig();
    public responseModel: ResponseModel<any>;


    constructor(protected _httpClient: HttpClient, protected _apiRoot: string = environment.apiGatewayURL) {
        this.responseModel = new ResponseModel;
    };

    get(endPoint: string): Observable<ResponseModel<TModel>> {
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._httpClient.get(apiURL).map((resp: ResponseModel<TModel>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        })
    };

    getAll(endPoint: string): Observable<ResponseModel<TModel[]>> {
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._httpClient.get(apiURL).map((resp: ResponseModel<TModel[]>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    };

    getAllPag(endPoint: string, object: PaginationModel): Observable<ResponseModel<PaginatioResponseModel<TModel[]>>> {
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._httpClient.post(apiURL, object, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<PaginatioResponseModel<TModel[]>>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    }

    getDetails(endPoint: string, query: string): Observable<ResponseModel<TModel>> {
        const apiURL = `${this._apiRoot}${endPoint}${query}`;
        return this._httpClient.get(apiURL).map((resp: ResponseModel<TModel>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    };

    create(endPoint: string, object: TModel): Observable<ResponseModel<TModel>> {
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._httpClient.post(apiURL, object, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<TModel>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    };

    update(endPoint: string, object: TModel): Observable<ResponseModel<TModel>> {
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._httpClient.post(apiURL, object, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<TModel>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    };

    public delete(endPoint: string, object: DeleteModel,addAutorization: boolean = true): Observable<ResponseModel<TModel>> {
        const apiURL = `${this._apiRoot}${endPoint}`;
        return this._httpClient.post(apiURL, object, { headers: this.headersConfig.httpHeaders })
        .map((resp: ResponseModel<TModel>) => {
            this.responseModel.header = resp.header;
            this.responseModel.data = resp.data;
            return this.responseModel;
        });
    };
    
    private convertToJSON(object: any) {
        return JSON.stringify(object);
    };
}
