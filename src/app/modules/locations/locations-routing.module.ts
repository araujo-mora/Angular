import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CountriesComponent } from './countries/countries.component';
import { LocationsComponent } from './locations.component';

const routes: Routes = [
  {
    path: '',
    component: LocationsComponent,
    children: [
      {
        path: 'countries',
        component: CountriesComponent,
      },
      { path: '', redirectTo: 'countries', pathMatch: 'full' },
      {
        path: '**',
        component: CountriesComponent,
        pathMatch: 'full',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocationsRoutingModule { }
