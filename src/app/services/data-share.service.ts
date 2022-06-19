import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CountryModel } from '../modules/locations/countries/country-model';

@Injectable()
export class DataShareService {

  public _countries = new BehaviorSubject<any>([]);
  public _flag = new BehaviorSubject<any>([]);

  countries$ = this._countries.asObservable();
  flag$ = this._flag.asObservable();

  constructor() { }

  public shareCountries(country: CountryModel) {
    this._countries.next(country);
  }

  public shareView(flag: any) {
    this._flag.next(flag);
  }
}
