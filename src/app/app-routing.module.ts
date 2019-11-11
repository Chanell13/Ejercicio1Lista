import { Routes, RouterModule } from '@angular/router';
import { LugaresComponent } from './lugares/lugares.component';
import { PlaceDetailsComponent } from './place-details/place-details.component';
import { CidudadesComponent } from './cidudades/cidudades.component';

const getPlace = 'places/:id';


export const routes: Routes = [
  /*{ path: '', component: WelcomeComponent },
  { path: 'page1', component: Page1Component },*/
{ path: 'Ciudades', component: CidudadesComponent, /*canActivate: [ AuthGuard ]*/ },
  { path: 'Lugares', component: LugaresComponent },
  { path:  getPlace, component: PlaceDetailsComponent},


];

export const Routing = RouterModule.forRoot(routes,
  {} // { enableTracing: true }
);
