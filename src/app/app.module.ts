import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrandComponent } from './component/brand/brand.component';
import { HttpClientModule } from '@angular/common/http';


import { CarComponent } from './component/car/car.component';
import { NaviComponent } from './component/navi/navi.component';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ColorComponent } from './component/color/color.component';
import { AppRoutingModule } from './app-routing.module';
import { CarImageComponent } from './component/car-image/car-image.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    NaviComponent,
    CarComponent,
    ColorComponent,
    CarImageComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
