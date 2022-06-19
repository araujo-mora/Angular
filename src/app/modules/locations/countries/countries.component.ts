import {  Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import * as _ from 'lodash';
import { CountryModel } from './country-model';
import { DataShareService } from 'src/app/services/data-share.service';
import { CountriesService } from 'src/app/services/countries.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../../modal/modal.component';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss'],
})
export class CountriesComponent implements OnInit, OnDestroy {

  private unsubscribe: Subscription[] = [];
  _countries: any;
  public showList: boolean;

  constructor( 
    public _countriesService: CountriesService,
    public _share: DataShareService,
    public dialog: MatDialog
  ) { 
    const flagSubscription = this._share.flag$.subscribe(
      (flag)=>{
        if(_.isBoolean(flag)){
          this.showList = flag;
        }
      }
    );
    this.unsubscribe.push(flagSubscription);
  }

  ngOnInit(): void {
    const coutriesSubscription = this._countriesService.getAllCountries().subscribe(
      (data)=>{
        var results = _.map(data, (country) =>{
          var curr:string[] = [];
          var langs:string[] = [];
          for(var i in country.currencies){
            curr.push(country.currencies[i].name);
          }
          for(var i in country.languages){
            langs.push(country.languages[i]);
          }
          let option: CountryModel = {
            id:country.name.official,
            name: country.name.common ? country.name.common : undefined,
            cca3: country.cca3 ? country.cca3 : undefined,
            independent: country.independent ? country.independent : undefined,
            currencies: curr.length > 0 ? curr : ['undefined'],
            capital: country.capital ? country.capital : undefined,
            altSpellings: country.altSpellings ? country.altSpellings : undefined,
            region: country.region ? country.region : undefined,
            subregion: country.subregion ? country.subregion : undefined,
            languages: langs.length > 0 ? langs : ['undefined'],
            latlng: country.latlng ? country.latlng: undefined,
            borders: country.borders ? country.borders: ['undefined'],
            area: country.area ? country.area: undefined,
            maps: {
              googleMaps: country.maps.googleMaps ? country.maps.googleMaps : undefined,
              openStreetMaps: country.maps.openStreetMaps ? country.maps.openStreetMaps : undefined
            },
            population: country.population ? country.population : undefined,
            timezones: country.timezones ? country.timezones : undefined,
            continents: country.continents ? country.continents : undefined
          };
          return option;
        });
        this._countries = _.orderBy(results, ['name'],['asc'] );
      },
      (error)=>{
        console.log(error);
      }
    );
    this.unsubscribe.push(coutriesSubscription);
  }

  openDialog(event) {
    var country = this.findRow(event.currentTarget.value, this._countries);
    this.dialog.open(ModalComponent, {
      data: {
      id: country.id,
      name:country.name,
      cca3:country.cca3,
      independent:country.independent,
      currencies: country.currencies,
      capital: country.capital,
      altSpellings:country.altSpellings,
      region:country.region,
      subregion: country.subregion,
      languages:country.languages,
      latlng:country.latlng,
      borders:country.borders,
      area:country.area,
      maps:{
          googleMaps:country.maps.googleMaps,
          openStreetMaps:country.maps.openStreetMaps
      },
      population:country.population,
      timezones:country.timezones,
      continents:country.continents,
      },
    });
  }

  findRow(rowId, data): CountryModel {
    let rowSelected = _.find(data, (row: any) => {
      return row.id === rowId;
    });
    if (!rowSelected) {
      _.some(data, (datab: any) => {
        if (!!datab.rows) {
          rowSelected = this.findRow(rowId, datab.rows);
        } else {
          rowSelected = this.findRow(rowId, datab.children);
        }
        if (!!rowSelected) {
          return true;
        }
      });
    }
    return rowSelected;
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
