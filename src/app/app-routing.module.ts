import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent, ResetPasswordFormComponent, CreateAccountFormComponent, ChangePasswordFormComponent } from './shared/components';
import { AuthGuardService } from './shared/services';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { TasksComponent } from './pages/tasks/tasks.component';
import { ListComponent } from './pages/order/list/list.component';
import { ListCustomerComponent } from './pages/customer/list/list-customer.component';
import { ListCategoryComponent } from './pages/category/list/list-category.component';
import { ListProductComponent } from './pages/product/list/list-product.component';
import { DxDataGridModule, DxFormModule } from 'devextreme-angular';
import { DxButtonModule } from 'devextreme-angular';
import { Browser } from 'selenium-webdriver';
import { BrowserModule } from '@angular/platform-browser';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'orders',
    component: ListComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'customers',
    component: ListCustomerComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'categories',
    component: ListCategoryComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'products',
    component: ListProductComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'login-form',
    component: LoginFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'reset-password',
    component: ResetPasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'create-account',
    component: CreateAccountFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: 'change-password/:recoveryCode',
    component: ChangePasswordFormComponent,
    canActivate: [ AuthGuardService ]
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), BrowserModule,DxDataGridModule, DxFormModule, DxButtonModule],
  providers: [AuthGuardService],
  exports: [RouterModule],
  declarations: [HomeComponent, ProfileComponent, TasksComponent, ListComponent, 
                  ListCustomerComponent,ListCategoryComponent, ListProductComponent]
})
export class AppRoutingModule { }
