import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './modules/layout/toolbar/toolbar.component';
import { AngularMaterialModule } from './utils/angular-material/angular-material.module';
import { DataShareService } from './services/data-share.service';

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule
  ],
  providers: [DataShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
