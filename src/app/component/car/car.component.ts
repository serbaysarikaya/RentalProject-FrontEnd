import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/models/car';
import { CarDetails } from 'src/app/models/carDetails';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';
import { CarService } from 'src/app/services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  cars: CarDetails[] = [];
  carImages:CarImage[]=[];
  baseUrl="https://localhost:7004/Uploads/Images/"
  imageOfPath:string;

  constructor(private carService: CarService, private activatedRoute: ActivatedRoute, private carImageService:CarImageService ) {

  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {

      if (params["brandId"]) {
        this.getCarsByBrand(params["brandId"]);
      }
      else if (params["colorId"]) {
        this.getCarsByColor(params["colorId"]);
      }
      else {
        this.getCars();
      }

    });
  }

  getCars() {
    this.carService.getCars().subscribe(response => {
      this.cars = response.data;
    });
  }

  getCarsByBrand(brandId: number) {
    this.carService.getCarsByBrand(brandId).subscribe(response => {
      this.cars = response.data;

    });
  }

  getCarsByColor(colorId: number) {
    this.carService.getCarsByColor(colorId).subscribe(response => {
      this.cars = response.data
    });
  }

 image(carId:number){
  this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
    const imagePath=response.data[0].imagePath
    this.imageOfPath= this.baseUrl+imagePath;
    console.log(this.imageOfPath)
  })
  return this.imageOfPath

}
}
