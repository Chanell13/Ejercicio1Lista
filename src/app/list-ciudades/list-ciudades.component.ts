import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CityService } from '../service/city.service';
import { City } from '../domain/city';

@Component({
  selector: 'app-list-ciudades',
  templateUrl: './list-ciudades.component.html',
  styleUrls: ['./list-ciudades.component.scss']
})
export class ListCiudadesComponent implements OnInit {
  cities: City[] = null;

  searchFilter = '';
  constructor(private cityService: CityService, private cd: ChangeDetectorRef) { }

  ngOnInit() {
       // this.cities = this.cityService.getAllCities();

       this.cityService.getAllCities().subscribe(
        cities => {

          this.cd.detach();
          this.cities = cities;
          // + 10 ...
          this.cd.detectChanges(); // render
          // + 10 ...

          this.cd.markForCheck();
          this.cd.reattach();  // 1
        },
        error => console.error(error)
      );
  }

}
