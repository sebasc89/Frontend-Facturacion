//components
import { NgModule, Component, enableProdMode, OnInit } from '@angular/core';

//models & variables
import { CategoryModel } from 'src/app/shared/models/category.model';
import { PaginationModel } from 'src/app/shared/models/common/pagination.model';
import { environment } from 'src/environments/environment';
import { APIENDPOINT } from 'src/app/config/configuration';

//services & config
import { CategoryService } from 'src/app/shared/services/domain/category.service';
//import { ToastrService } from 'ngx-toastr';

@Component({
  templateUrl: './list-category.component.html',
  styleUrls: ['./list-category.component.scss']
})
export class ListCategoryComponent implements OnInit {

  iconAddFilter: string;
  showFilters: boolean = false;

  smallnumPages: number;
  Id: number;

  paginationModel: PaginationModel = new PaginationModel();
  results: CategoryModel[];

  constructor(
      private _categoryService: CategoryService
  ) {
   }

  ngOnInit() {
      this.getAll();
  }

    getAll(filters: any = null) {
        debugger
        this._categoryService.getAll(APIENDPOINT.getAllCategories)
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
