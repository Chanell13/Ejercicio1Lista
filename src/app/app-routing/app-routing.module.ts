
import { Routes, RouterModule } from '@angular/router';
import { PlaceDetailsComponent } from '../place-details/place-details.component';
import { ERROR_COMPONENT_TYPE } from '@angular/compiler';


const getPlace = 'places/:id';


export const routes: Routes = [
 /*  { path: '', component: WelcomeComponent },
  { path: 'page1', component: Page1Component },
  { path: 'page2', component: Page2Component, canActivate: [ AuthGuard ] },
  { path: 'page3', component: Page3Component }, */
  { path:  getPlace, component: PlaceDetailsComponent},
  { path: 'pagar', loadChildren: './checkout/checkout.module#CheckoutModule'}


];

export const Routing = RouterModule.forRoot(routes,
  {} // { enableTracing: true }
);
