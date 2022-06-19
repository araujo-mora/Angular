import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationsRoutingModule } from './locations-routing.module';
import { LocationsComponent } from './locations.component';
import { CountriesComponent } from './countries/countries.component';
import { CountriesService } from 'src/app/services/countries.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AngularMaterialModule } from 'src/app/utils/angular-material/angular-material.module';
import { DataRenderPipe } from '../pipes/data-render.pipe';
import { DataShareService } from 'src/app/services/data-share.service';
import { ToolbarComponent } from '../layout/toolbar/toolbar.component';
import { LoaderComponent } from '../layout/loader/loader.component';
import { LoaderService } from 'src/app/services/loader.service';
import { LoaderInterceptor } from '../layout/loader/loader.interceptor';
import { ModalComponent } from '../modal/modal.component';


@NgModule({
  declarations: [
    LocationsComponent,
    CountriesComponent,
    ToolbarComponent,
    LoaderComponent,
    DataRenderPipe,
    ModalComponent,
  ],
  imports: [
    CommonModule,
    LocationsRoutingModule,
    HttpClientModule,
    AngularMaterialModule,
  ],
  providers:[
    CountriesService,
    DataShareService,
    LoaderService,
    {
      provide: HTTP_INTERCEPTORS, 
      useClass: LoaderInterceptor, 
      multi: true
    },
  ]
})
export class LocationsModule { }
