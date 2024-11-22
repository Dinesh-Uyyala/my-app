import { Component } from '@angular/core';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-id',
  templateUrl: './student-id.component.html',
  styleUrls: ['./student-id.component.css']
})
export class StudentIdComponent {
  students: any=[];
constructor(private _studentService:StudentService){
  this._studentService.getStudentList().subscribe((data:any) => {
  this.students=data;
  console.log(this.students);
  },(err:any)=>{
    alert("Internal Server Error")
  })
  }

  edit(){

  }

  delete(){
    
  }
}
