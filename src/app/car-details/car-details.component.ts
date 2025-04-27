import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from '../models/car.model';
import { CarService } from '../services/car.service';

@Component({
  selector: 'app-car-details',
  templateUrl: './car-details.component.html',
  styleUrls: ['./car-details.component.css']
})
export class CarDetailsComponent {

  carId!: number;
  car!: Car;

  constructor(private route: ActivatedRoute, private carService: CarService) { }

  ngOnInit(): void {
    this.carId = Number(this.route.snapshot.paramMap.get('id'));
    // this.car = this.carService.getCarById(this.carId)!;
    const id = Number(this.route.snapshot.paramMap.get('id'));
  this.carService.getCarById(id).subscribe(data => {
    this.car = data;
  });
  }
}
