import { Component, OnInit, Input } from '@angular/core';
import { Place } from '../domain/place';
import { ActivatedRoute, Router } from '@angular/router';
import { PlacesService } from '../service/places.service';

@Component({
  selector: 'app-place-details',
  templateUrl: './place-details.component.html',
  styleUrls: ['./place-details.component.css']
})
export class PlaceDetailsComponent implements OnInit {

  @Input() place: Place;
  error: string = null;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private placeService: PlacesService) {
  }

  ngOnInit() {
    const placeId = this.route.snapshot.paramMap.get('id');

  }

}
