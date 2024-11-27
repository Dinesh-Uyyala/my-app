import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private _htpClient:HttpClient) { }
  getTodos(){
    return this._htpClient.get('https://jsonplaceholder.typicode.com/todos');
  }
}
