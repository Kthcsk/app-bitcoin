import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  constructor(private _http: HttpClient) { }

  getPriceInUsd(){
    return this._http.get('https://api.coindesk.com/v1/bpi/currentprice/USD.json');
  }

  getFluctuationPrice(){
    return this._http.get('https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-08-09&end=2020-09-09');
  }
}
