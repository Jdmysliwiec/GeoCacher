import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { geoKey } from './api-keys';

@Injectable()
export class GeocodeApiLocationService {

  constructor(private http: Http) { }

  getByLatAndLong(latitude: string, longitude: string) {
    return this.http.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&key="+geoKey);
  }

}
