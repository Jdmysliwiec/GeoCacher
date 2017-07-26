import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { GeocodeApiLocationService } from '../geocode-api-location.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-location-form',
  templateUrl: './location-form.component.html',
  styleUrls: ['./location-form.component.css'],
  providers: [ GeocodeApiLocationService ]
})
export class LocationFormComponent implements OnInit {
  locationsByCoord: any[]=null;
  locationsByAddress: any[]=null;

  constructor(private router: Router, private geocodeLocations: GeocodeApiLocationService) { }

  ngOnInit() {
  }

  getLocationByCoord(latitude: string, longitude: string) {
    this.geocodeLocations.getByLatAndLong(latitude, longitude).subscribe(response => {
      this.locationsByCoord = response.json();
    });
  }

  getLocationByAddress(address: string, city: string, state: string) {
    this.geocodeLocations.getByAddress(address, city, state).subscribe(response => {
      this.locationsByAddress = response.json();
    });
  }
}
