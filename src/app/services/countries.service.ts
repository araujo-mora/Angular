import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from './http.service';

@Injectable()
export class CountriesService extends HttpService {

  constructor(public _http: HttpClient) {
    super(_http);
  }

  public getAllCountries(): Observable<any> {
    const url = `${this.URLApi}/all`;
    return this.get(url);
  }
}
