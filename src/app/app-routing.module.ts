import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { CarComponent } from './component/car/car.component';
import { CarImageComponent } from './component/car-image/car-image.component';
import { CarDetailComponent } from './component/car-detail/car-detail.component';

const routes: Routes = [
  { path: "", pathMatch: "full", component: CarComponent },
  { path: "cars", component: CarComponent },
  { path: "cars/brand/:brandId", component: CarComponent },
  { path: "cars/color/:colorId", component: CarComponent },
  { path: "colors", component: CarComponent },
  { path: "carDetail", component: CarDetailComponent },
  { path: "cars/brand/:brandId/carDetail", component: CarDetailComponent },
  { path: "cars/color/:colorId/carDetail", component: CarDetailComponent },
  { path: "cars/carDetails/:carId", component: CarDetailComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
