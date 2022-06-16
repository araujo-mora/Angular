import { Component, OnInit } from '@angular/core';
import { CountriesService } from 'src/app/services/countries.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.scss']
})
export class CountriesComponent implements OnInit {

  constructor(
    public _countriesService: CountriesService
  ) { }

  ngOnInit(): void {
    this._countriesService.getAllCountries().subscribe(
      (data) =>{
        console.log(data);
      }
    );
  }

}
