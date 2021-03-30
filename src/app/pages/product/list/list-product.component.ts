//components
import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';

//models & variables
import { ProductModel } from 'src/app/shared/models/product.model';
import { PaginationModel } from 'src/app/shared/models/common/pagination.model';
import { environment } from 'src/environments/environment';
import { APIENDPOINT } from 'src/app/config/configuration';

//services & config
import { ProductService } from 'src/app/shared/services/domain/product.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.scss']
})
export class ListProductComponent implements OnInit {

  iconAddFilter: string;
  showFilters: boolean = false;

  smallnumPages: number;
  Id: number;

  paginationModel: PaginationModel = new PaginationModel();
  results: ProductModel[];

  constructor(
      private _productService: ProductService
  ) {
   }

  ngOnInit() {
      this.getAll();
  }

    getAll(filters: any = null) {
        debugger
        this._productService.getAll(APIENDPOINT.getAllProducts)
        .subscribe(response => {
            if (response.header.reponseCode === 200) {
                this.results = response.data;
                console.log(this.results)
            } else {
                // debugger;
                //this._toastrService.error(response.header.message, '¡Error!');
            }
        });
    }
}
