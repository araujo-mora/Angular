import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { CountriesService } from 'src/app/services/countries.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  countries$: Observable<any>;

  constructor( public _countriesService: CountriesService ) { }

  ngOnInit(): void {
    this.countries$ = this._countriesService.getAllCountries();
    this.countries$ .subscribe(
      (data)=>{
        console.log(data);
      },
      (error)=>{
        console.log(error);
      }
    )
  }
}
