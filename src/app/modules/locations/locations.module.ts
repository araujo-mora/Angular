import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesService } from 'src/app/services/countries.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    LocationsComponent,
    CountriesComponent
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    HttpClientModule
  ],
  providers:[
    CountriesService
  ]
})
export class LocationsModule { }
