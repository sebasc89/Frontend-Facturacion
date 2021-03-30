import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SideNavOuterToolbarModule, SideNavInnerToolbarModule, SingleCardModule } from './layouts';
import { FooterModule, ResetPasswordFormModule, CreateAccountFormModule, ChangePasswordFormModule, LoginFormModule } from './shared/components';
import { HttpClientModule } from '@angular/common/http';

import { AuthService, ScreenService, AppInfoService } from './shared/services';
import { CategoryService } from './shared/services/domain/category.service';
import { ProductService } from './shared/services/domain/product.service';
import { CustomerService } from './shared/services/domain/customer.service';
import { OrderService } from './shared/services/domain/order.service';

import { UnauthenticatedContentModule } from './unauthenticated-content';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    HttpClientModule,
    CommonModule,
    BrowserModule,
    SideNavOuterToolbarModule,
    SideNavInnerToolbarModule,
    SingleCardModule,
    FooterModule,
    ResetPasswordFormModule,
    CreateAccountFormModule,
    ChangePasswordFormModule,
    LoginFormModule,
    UnauthenticatedContentModule,
    AppRoutingModule
    
  ],
  providers: [AuthService, ScreenService, AppInfoService,
              CategoryService, ProductService, CustomerService,OrderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
