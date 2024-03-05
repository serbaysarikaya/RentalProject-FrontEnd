import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/listResponseModel';
import { CarImage } from '../models/carImage';

@Injectable({
  providedIn: 'root'
})
export class CarImageService {

  apiUrl = "https://localhost:7004/api";

  constructor(private httpClient: HttpClient) { }

  getCarImages(): Observable<ListResponseModel<CarImage>> {
    var newPath = "/CarImages/GetAll"
    return this.httpClient.get<ListResponseModel<CarImage>>(`${this.apiUrl}${newPath}`);
  }

  getCarImagesByCarId(carId: number): Observable<ListResponseModel<CarImage>> {
    var newPath = "/CarImages/getbycarid?carId="
    return this.httpClient.get<ListResponseModel<CarImage>>(`${this.apiUrl}${newPath}${carId}`);
  }
}
