import { Component } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
todoList:any=[];

  constructor(private _todoService:TodoService){
    console.log("Todo Component is ready");
    _todoService.getTodos().subscribe((data:any)=>{
      console.log(data);
      this.todoList=data
    },(err:any)=>{
      alert("Internal Server Error")
    })
  }

}
