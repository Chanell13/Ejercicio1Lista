import { Injectable } from '@angular/core';
import { Place } from '../domain/place';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  constructor() { }

  getall(): Place[] {
    return[
      {
        _id: '01-A',
        name: 'Chanell',
        address: 'Guadalbullon7'
    },
    {
      _id: '01-B',
      name: 'Lisbeth',
      address: 'Garcia Castro 8'
    }

    ];


  }
}
