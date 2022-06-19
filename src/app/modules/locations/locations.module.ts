import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesService } from 'src/app/services/countries.service';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from 'src/app/utils/angular-material/angular-material.module';
import { DataRenderPipe } from '../pipes/data-render.pipe';
import { DataShareService } from 'src/app/services/data-share.service';


@NgModule({
  declarations: [
    LocationsComponent,
    CountriesComponent,
    DataRenderPipe,
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
  ],
  providers:[
    CountriesService,
    DataShareService
  ]
})
export class LocationsModule { }
