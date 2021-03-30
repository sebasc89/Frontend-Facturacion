//components
import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';  
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

//models & variables
import { OrderModel } from 'src/app/shared/models/order.model';
import { PaginationModel } from 'src/app/shared/models/common/pagination.model';
import { environment } from 'src/environments/environment';
import { APIENDPOINT } from 'src/app/config/configuration';

//services & config
import { OrderService } from 'src/app/shared/services/domain/order.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  iconAddFilter: string;
  showFilters: boolean = false;

  smallnumPages: number;
  Id: number;

  paginationModel: PaginationModel = new PaginationModel();
  results: OrderModel[];

  constructor(
      private _orderService: OrderService
  ) {
   }

  ngOnInit() {
      this.getAll();
  }

    getAll(filters: any = null) {
        debugger
        this._orderService.getAll(APIENDPOINT.getAllOrders)
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
