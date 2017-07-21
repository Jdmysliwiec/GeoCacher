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
  locations: any[]=null;

  constructor(private router: Router, private geocodeLocations: GeocodeApiLocationService) { }

  ngOnInit() {
  }

  getLocation(latitude: string, longitude: string) {
    this.geocodeLocations.getByLatAndLong(latitude, longitude).subscribe(response => {
      this.locations = response.json();
      console.log(this.locations);
    });
  }
}
