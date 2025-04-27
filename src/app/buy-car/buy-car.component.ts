import { Component, OnInit } from '@angular/core';
import { CarService } from '../services/car.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buy-car',
  templateUrl: './buy-car.component.html',
  styleUrls: ['./buy-car.component.css']
})
export class BuyCarComponent implements OnInit {
  cars: any[] = [];
  filteredCars: any[] = [];
  searchText: string = '';
  selectedFuel: string = '';
  selectedPrice: string = '';
  sortOrder: string = 'none';
  currentPage: number = 1;
  carsPerPage: number = 6;
  totalPages: number = 1;

  constructor(private carService: CarService,  private router: Router) {}

  ngOnInit(): void {
    this.loadCars();
  }

  loadCars() {
    this.carService.getAllCars().subscribe(data => {
      this.cars = data;
      this.applyFilters();  // Apply filters when the cars are loaded
    });
  }

  applyFilters() {
    let filtered = this.cars.filter(car => {
      const matchesSearch = this.searchText === '' || 
        car.name.toLowerCase().includes(this.searchText.toLowerCase()) || 
        car.modelNumber.toLowerCase().includes(this.searchText.toLowerCase());
  
      const matchesFuel = this.selectedFuel === '' || car.fuelType === this.selectedFuel;
  
      const matchesPrice = this.selectedPrice === '' ||
        (this.selectedPrice === 'under5' && car.price < 500000) ||
        (this.selectedPrice === '5to10' && car.price >= 500000 && car.price <= 1000000) ||
        (this.selectedPrice === 'above10' && car.price > 1000000);
  
      return matchesSearch && matchesFuel && matchesPrice;
    });

    // Apply sorting
    if (this.sortOrder === 'lowToHigh') {
      filtered = filtered.sort((a, b) => a.price - b.price);
    } else if (this.sortOrder === 'highToLow') {
      filtered = filtered.sort((a, b) => b.price - a.price);
    }
  
    // Update pagination
    this.totalPages = Math.ceil(filtered.length / this.carsPerPage);
    const startIndex = (this.currentPage - 1) * this.carsPerPage;
    const endIndex = startIndex + this.carsPerPage;
    this.filteredCars = filtered.slice(startIndex, endIndex);
  }

  buyCar(carId: number): void {
    console.log(`Buying car with ID: ${carId}`);
    
    // Optionally, navigate to a checkout page
    // this.router.navigate(['/checkout', carId]);

    // You could also update the backend to mark the car as sold, if needed.
    this.carService.buyCar(carId).subscribe(
      (response: any) => {  // Explicitly typing response as any (or define a specific type if needed)
        console.log('Car purchase successful', response);
        // Optionally, refresh the car list or navigate elsewhere
      },
      (error: any) => {  // Explicitly typing error as any
        console.error('Error purchasing car', error);
      }
    );
  }

}
