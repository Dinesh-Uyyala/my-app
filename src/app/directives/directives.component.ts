import { Component } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  age:number=20;
  ages:number[]=[10,20,30,40,50];

  state:string="telangana"
  states:string[]=["telangana","andhra","karnataka"]


  products:any=[
    {name:'pen',price:20},
    {name:'shirt',price:3000},
    {name:'mobile',price:15000},
    {name:'laptops',price:40000},
    {name:'car',price:200000},
    {name:'bike',price:100000},
  ]


  today:any=new Date();
  date=new Date();
}
