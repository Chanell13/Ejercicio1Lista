import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { City } from '../domain/city';

@Injectable({
  providedIn: 'root'
})
export class CityService {

  constructor() { }
  getAllCities(): Observable<City[]> {
    return of([
      { name: 'Alicante', country: 'España' },
      { name: 'Valencia', country: 'España' },
      { name: 'Cadiz', country: 'España' },
      { name: 'Huelva', country: 'España' }
    ]).pipe(
      delay(300)
    );
  }
}
