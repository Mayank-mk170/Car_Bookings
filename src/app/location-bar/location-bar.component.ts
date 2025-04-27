import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-location-bar',
  templateUrl: './location-bar.component.html',
  styleUrls: ['./location-bar.component.css']
})
export class LocationBarComponent {
  showPopup = false;
  searchText = '';
  suggestions: any[] = [];
  selectedCity: string = '';
  apiKey = '7a289bee98ad46a4b96653a04fcae453';

  popularCities = [
    { name: 'Delhi', logo: 'assets/images/cities/delhi.png' },
    { name: 'Mumbai', logo: 'assets/images/cities/mumbai.png' },
    { name: 'Bangalore', logo: 'assets/images/cities/bang.png' },
    { name: 'Chennai', logo: 'assets/images/cities/chen.png' },
    { name: 'Kolkata', logo: 'assets/images/cities/kolkata.png' },
    { name: 'Hyderabad', logo: 'assets/images/cities/hyd.png' },
    { name: 'Pune', logo: 'assets/images/cities/pune.png' },
    { name: 'Ahmedabad', logo: 'assets/images/cities/ahd.png' },
    { name: 'Jaipur', logo: 'assets/images/cities/chd.png' },
    { name: 'Lucknow', logo: 'assets/images/cities/pune.png' },
    { name: 'Kochi', logo: 'assets/images/cities/koch.png' }

  ];


  detectMyLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const lat = position.coords.latitude;
          const lon = position.coords.longitude;

          // Now reverse geocode with Geoapify API
          const apiKey = '7a289bee98ad46a4b96653a04fcae453';
          const url = `https://api.geoapify.com/v1/geocode/reverse?lat=${lat}&lon=${lon}&apiKey=${apiKey}`;

          this.http.get<any>(url).subscribe((response) => {
            const city = response.features[0].properties.city;
            alert(`Your current location is: ${city}`);
          });
        },
        (error) => {
          console.error('Location detection failed', error);
          alert('Unable to detect location. Please allow location access.');
        }
      );
    } else {
      alert('Geolocation is not supported by your browser.');
    }
  }
  constructor(private http: HttpClient) {}

  openPopup() {
    this.showPopup = true;
    this.searchText = '';
    this.suggestions = [];
  }

  closePopup() {
    this.showPopup = false;
  }

  onInputChange() {
    if (this.searchText.length < 3) {
      this.suggestions = [];
      return;
    }

    const url = `https://api.geoapify.com/v1/geocode/autocomplete?text=${encodeURIComponent(this.searchText)}&limit=5&apiKey=${this.apiKey}`;
    this.http.get<any>(url).subscribe((response) => {
      this.suggestions = response.features;
    });
  }

  // selectLocation(location: any) {
  //   alert(`Selected location: ${location.properties.formatted}`);
  //   this.closePopup();
  // }

  selectLocation(city: any) {
    this.selectedCity = city.name || city.properties.formatted;
    this.showPopup = false;
  }

  viewAllCities() {
    alert('Show all cities list page or popup!');
  }
 
  selectCity(city: string) {
    this.selectedCity = city;
    this.showPopup = false; // close popup after selection
  }
}
