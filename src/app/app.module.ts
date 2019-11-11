import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PlaceListComponent } from './place-list/place-list.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { HttpClientModule } from '@angular/common/http';
import { PlaceComponent } from './place/place.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { LugaresComponent } from './lugares/lugares.component';
import { Routing } from './app-routing.module';
import { CidudadesComponent } from './cidudades/cidudades.component';
import { ListCiudadesComponent } from './list-ciudades/list-ciudades.component';
import { LaboratorioComponent } from './laboratorio/laboratorio.component';
import { CityComponent } from './city/city.component';
import { StartWithPipe } from './pipe/start-with.pipe';
import { CurrencyPipe } from './pipe/currency.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    PlaceListComponent,
    PlaceDetailsComponent,
    PlaceComponent,
    SpinnerComponent,
    LugaresComponent,
    CidudadesComponent,
    ListCiudadesComponent,
    LaboratorioComponent,
    CityComponent,
    StartWithPipe,
    CurrencyPipe
  ],
  imports: [
    BrowserModule,
    Routing,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
