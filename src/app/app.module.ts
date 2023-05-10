import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductService } from './product.service';
import { CartComponent } from './cart/cart.component';
import { Angular4PaystackModule } from 'angular4-paystack';
import { CategoryNavigationComponent } from './category-navigation/category-navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProductDetailComponent,
    CartComponent,
    CategoryNavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    Angular4PaystackModule.forRoot('pk_live_60db3af35e4c5a3b71212944c7dc81d61dcbb568'), // Add the public key here

  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
