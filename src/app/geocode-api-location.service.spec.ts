import { TestBed, inject } from '@angular/core/testing';

import { GeocodeApiLocationService } from './geocode-api-location.service';

describe('GeocodeApiLocationService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GeocodeApiLocationService]
    });
  });

  it('should ...', inject([GeocodeApiLocationService], (service: GeocodeApiLocationService) => {
    expect(service).toBeTruthy();
  }));
});
