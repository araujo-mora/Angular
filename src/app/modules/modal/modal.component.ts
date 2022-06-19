import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { CountryModel } from '../locations/countries/country-model';

export interface DialogData {
  id:string,
  name:string,
  cca3:string,
  independent:boolean,
  currencies: any[]
  capital:[],
  altSpellings:[],
  region:string,
  subregion: string,
  languages:[],
  latlng:[],
  borders:[],
  area:number,
  maps:{
      googleMaps:string,
      openStreetMaps:string
  },
  population:number,
  timezones:[],
  continents:[],
}

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

  country: CountryModel
  constructor( @Inject(MAT_DIALOG_DATA) public data: DialogData ) {  }

  ngOnInit(): void {  }

}
