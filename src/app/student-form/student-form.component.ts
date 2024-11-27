import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { yearsPerPage } from '@angular/material/datepicker';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent {

  public userForm:FormGroup=new FormGroup({
    name:new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(10)]),
    class:new FormControl('',[Validators.required,Validators.min(18),Validators.max(60)]),
    email:new FormControl(),
    fatherName:new FormControl(),
    dob:new FormControl(),
    address:new FormGroup({
      addressLine:new FormControl(),
      city:new FormControl(),
      state:new FormControl(),
      pincode:new FormControl(),
    }),
    type:new FormControl(),
    // busFee:new FormControl(),
    // hostelFee:new FormControl(),
    marks:new FormArray([]),
  });

  get marksFormArray(){
    return this.userForm.get('marks') as FormArray;
  }

  addMarks(){
    this.marksFormArray.push(
      new FormGroup({
        class:new FormControl(),
        year:new FormControl(),
        percentage:new FormControl(),
      })
    )
  }

  deleteMarks(i:number){
    this.marksFormArray.removeAt(i);
  }


  constructor(){
    this.userForm.get('type')?.valueChanges.subscribe((data:any)=>{
      if(data=='dayScholor'){
        this.userForm.addControl('busFee',new FormControl());
      this.userForm.removeControl('hostelFee')
    }else{
      this.userForm.addControl('hostelFee',new FormControl());
      this.userForm.removeControl('busFee')
    }
    })
  }

  submit(){
    console.log(this.userForm);
  }
}
