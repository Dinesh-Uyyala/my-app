import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { RegistrationComponent } from './registration/registration.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { AccountComponent } from './account/account.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { WeatherComponent } from './weather/weather.component';
import { ImdbComponent } from './imdb/imdb.component';
import { BlogComponent } from './blog/blog.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { StudentIdComponent } from './student-id/student-id.component';
import { TodoComponent } from './todo/todo.component';
import { DummyComponent } from './dummy/dummy.component';
import { CreateUserComponent } from './create-user/create-user.component';
import { StudentFormComponent } from './student-form/student-form.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'login',component:LoginComponent},
  {path:'dashboard',component:DashboardComponent,children:[
    {path:'dummy',component:DummyComponent},
    {path:'home',component:HomeComponent},
    {path:'calculator',component:CalculatorComponent},
    {path:'data-binding',component:DataBindingComponent},
    {path:'directives',component:DirectivesComponent},
    {path:'register',component:RegistrationComponent},
    {path:'add-employee',component:AddEmployeeComponent},
    {path:'employee',component:EmployeeComponent},
    {path:'vehicle',component:VehicleComponent},
    {path:'account',component:AccountComponent},
    {path:'flipkart',component:FlipkartComponent},
    {path:'imdb',component:ImdbComponent},
    {path:'blog',component:BlogComponent},
    {path:'todo',component:TodoComponent},
    {path:'create-user',component:CreateUserComponent},
    {path:'student-form',component:StudentFormComponent},
    {path:'student-id',component:StudentIdComponent},
    {path:'pokemon',component:PokemonComponent},
    {path:'weather',component:WeatherComponent},
    {path:'create-vehicle',component:CreateVehicleComponent},
  ]},
  {path:'**',component:PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
