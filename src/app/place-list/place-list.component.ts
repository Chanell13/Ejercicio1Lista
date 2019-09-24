import { Component, OnInit } from '@angular/core';
import { PlacesService } from '../service/places.service';
import { Place } from '../domain/place';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.css']
})
export class PlaceListComponent implements OnInit {
 places: Place[];
  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.places = this.placeService.getall();
  }

}
