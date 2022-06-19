import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSelectModule } from '@angular/material/select'; 
import { MatCardModule } from '@angular/material/card';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog'; 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ],
  exports:[
    MatSelectModule,
    MatCardModule,
    MatExpansionModule,
    MatTooltipModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule
  ]
})
export class AngularMaterialModule { }
