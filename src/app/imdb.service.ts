import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ImdbService {

  constructor( private _httpClient:HttpClient) { }

  getMovies(){
    return this._httpClient.get('https://dummyapi.online/api/movies')
  }

  

}
