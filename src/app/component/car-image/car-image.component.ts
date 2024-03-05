import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarImage } from 'src/app/models/carImage';
import { CarImageService } from 'src/app/services/car-image.service';

@Component({
  selector: 'app-car-image',
  templateUrl: './car-image.component.html',
  styleUrls: ['./car-image.component.css']
})
export class CarImageComponent implements OnInit {

  carImages:CarImage[]=[];
  baseUrl= "https://localhost:7004/Uploads/Images/"

  constructor(private carImageService:CarImageService,private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      if (params["carId"]) {
        this.getCarImagesByCarId(params["carId"]);
      }
    })
  }

  getCarImages(){
    this.carImageService.getCarImages().subscribe(response=>{
    this.carImages= response.data;
    });
  }
  getCarImagesByCarId(carId:number){
    this.carImageService.getCarImagesByCarId(carId).subscribe(response=>{
      this.carImages=response.data;
    })
  }
  getActiveImageClass(carImage:CarImage){
    if (carImage===this.carImages[0]) {
      return "active"
    } else {
      return ""
    }
  }

}
