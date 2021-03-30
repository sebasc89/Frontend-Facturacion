//components
import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';

//models & variables
import { CustomerModel } from 'src/app/shared/models/customer.model';
import { PaginationModel } from 'src/app/shared/models/common/pagination.model';
import { environment } from 'src/environments/environment';
import { APIENDPOINT } from 'src/app/config/configuration';

//services & config
import { CustomerService } from 'src/app/shared/services/domain/customer.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './list-customer.component.html',
  styleUrls: ['./list-customer.component.scss']
})
export class ListCustomerComponent implements OnInit {

  iconAddFilter: string;
  showFilters: boolean = false;

  smallnumPages: number;
  Id: number;

  paginationModel: PaginationModel = new PaginationModel();
  results: CustomerModel[];

  constructor(
      private _customerService: CustomerService
  ) {
   }

  ngOnInit() {
      this.getAll();
  }

    getAll(filters: any = null) {
        debugger
        this._customerService.getAll(APIENDPOINT.getAllCustomers)
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
