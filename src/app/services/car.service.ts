import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  
  private baseUrl = 'http://localhost:8080/api/cars';

  

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<Car[]>{
    return this.http.get<Car[]>(`${this.baseUrl}/all`);
  }
  getCarById(id: number): Observable<Car> {
    return this.http.get<any>(`${this.baseUrl}/${id}`);
    // return this.cars.find(c => c.id === id);

  }

  addCar(car: Car): Observable<Car> {
    return this.http.post<Car>(`${this.baseUrl}/add_car`, car);
  }

  updateCar(id: number, car: Car): Observable<Car> {
    return this.http.put<Car>(`${this.baseUrl}/${id}`, car);
  }

  deleteCar(id: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${id}`);
  }
  filterCars(name: string, fuelType: string, price: number): Observable<Car[]> {

    const params = new HttpParams()
      .set('name', name)
      .set('fuelType', fuelType)
      .set('price', price.toString());
    return this.http.get<Car[]>(`${this.baseUrl}/filter?name=${name}&fuelType=${fuelType}&price=${price}`);
  }

  buyCar(carId: number): Observable<any> {
    return this.http.put<any>(`${this.baseUrl}/${carId}/buy`, null);
  }
  
}
