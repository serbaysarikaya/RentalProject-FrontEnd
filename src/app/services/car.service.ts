import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { Car } from '../models/car';
import { CarDetails } from '../models/carDetails';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  apiUrl = "https://localhost:7004/api";

  constructor(private httpClient: HttpClient) { }

  getCars():Observable<ListResponseModel<CarDetails>>{
    let newPath=this.apiUrl+"/Cars/GetCardetails";
    return this.httpClient.get<ListResponseModel<CarDetails>>(newPath);
  }

  getCarsByBrand(brandId:number): Observable<ListResponseModel<CarDetails>> {
    return this.httpClient.get<ListResponseModel<CarDetails>>(`${this.apiUrl}/cars/getbybrandId?brandId=${brandId}`);
  }
  getCarsByColor(colorId:number): Observable<ListResponseModel<CarDetails>> {
    return this.httpClient.get<ListResponseModel<CarDetails>>(`${this.apiUrl}/cars/getbycolorId?colorId=${colorId}`);
  }

}
