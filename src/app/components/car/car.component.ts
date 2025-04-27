import { Component, OnInit } from '@angular/core';
import { CarService } from 'src/app/services/car.service';
import { Car, FuelType, Transmission } from '../../models/car.model';


@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
searchCars() {
throw new Error('Method not implemented.');
}
buyCar(arg0: any) {
throw new Error('Method not implemented.');
}

  cars: Car[] = [];

  car: Car = {
    name: '',
    modelNumber: '',
    yearOfManufacture: '',
    fuelType: FuelType.PETROL,
    kmRun: 0,
    transmission: Transmission.MANUAL,
    owner: 1,
    price: 0,
    description: '',
    imageUrl: ''

  };
iseditmode: boolean = false;  
currentEditId: number | null = null;

  fuelTypes = Object.values(FuelType);
  transmissions = Object.values(Transmission);
  isEditMode: boolean  = false;
searchName: any;
searchFuelType: any;
searchPrice: any;
filteredCars: any;

  constructor(private carService: CarService) {}

  ngOnInit(): void {
    this.getCars();
  }

  getCars() {
    this.carService.getAllCars().subscribe(data => {
      this.cars = data;
    });
  }


onSubmit() {
if (this.isEditMode && this.currentEditId !== null) {
      this.carService.updateCar(this.currentEditId, this.car).subscribe(() => {
        this.getCars();
        this.resetForm();
      });
    } else {
      this.carService.addCar(this.car).subscribe(() => {
        this.getCars();
        this.resetForm();
      });
    }
    console.log('Form submitted!', this.car);
  }

  editCar(car: Car) {
    this.car = { ...car };
    this.isEditMode = true;
    this.currentEditId = car.id!;
  }

  deleteCar(id: number | undefined) {
    if (id) {
      this.carService.deleteCar(id).subscribe(() => {
        this.getCars();
      });
    }
  }

  resetForm() {
    this.car = {
      name: '',
      modelNumber: '',
      yearOfManufacture: '',
      fuelType: FuelType.PETROL,
      kmRun: 0,
      transmission: Transmission.MANUAL,
      owner: 1,
      price: 0,
      description: '',
      imageUrl: ''
    };
    this.isEditMode = false;
    this.currentEditId = null;
  }

  
}
