import { Component, OnInit, OnDestroy } from '@angular/core';
import { PlacesService } from '../service/places.service';
import { Place } from '../domain/place';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-place-list',
  templateUrl: './place-list.component.html',
  styleUrls: ['./place-list.component.scss']
})
export class PlaceListComponent implements OnInit,  OnDestroy  {
 places: Place[] = null;
 error: string = null;

 private sub: Subscription;

  constructor(private placeService: PlacesService) { }

  ngOnInit() {
    this.sub = this.placeService.getAll().subscribe(
      data => { this.loadData(data); },
      error => { this.handleError(error); }
    );
  }

  ngOnDestroy() {
    if (this.sub) {
      this.sub.unsubscribe();
      this.sub = null;
    }
  }

  loadData(data: Place[]): void {
    this.error = null;
    this.places = data;
  }
  handleError(error: any): void {
    this.error = error.message;
    this.places = [];
  }

}
