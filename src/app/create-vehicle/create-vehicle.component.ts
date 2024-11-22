import { Component } from '@angular/core';
import { VehicleService } from '../vehicle.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-create-vehicle',
  templateUrl: './create-vehicle.component.html',
  styleUrls: ['./create-vehicle.component.css']
})
export class CreateVehicleComponent {
// vehicles:any={}

public vehicleForm:FormGroup=new FormGroup(
  {
    vehicle: new FormControl(),
    manufacturer: new FormControl(),
    model: new FormControl(),
    type: new FormControl(),
    fuel: new FormControl(),
    color: new FormControl(),
    image: new FormControl(),
    cost: new FormControl(),
  }
)

constructor(private _vehicleService:VehicleService) { }

createVehicle(){
  console.log(this.vehicleForm);
  this._vehicleService.createVehicles(this.vehicleForm.value).subscribe((data:any) => {
    alert("Creted Successfully")
  },(err:any)=>{
    alert("Creation Failed")
  }
)
}

}
