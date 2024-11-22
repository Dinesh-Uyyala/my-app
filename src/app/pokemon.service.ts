import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor( private _httpClient:HttpClient) { }

  getData(){
    return this._httpClient.get('https://dummyapi.online/api/pokemon')
  }
}
