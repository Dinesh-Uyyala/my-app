import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataBindingComponent } from './data-binding/data-binding.component';
import { DirectivesComponent } from './directives/directives.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RegistrationComponent } from './registration/registration.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeComponent } from './employee/employee.component';
import { VehicleComponent } from './vehicle/vehicle.component';
import { HttpClientModule } from "@angular/common/http";
import { AccountComponent } from './account/account.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { WeatherComponent } from './weather/weather.component';
import { ImdbComponent } from './imdb/imdb.component';
import { BlogComponent } from './blog/blog.component';
import { CreateVehicleComponent } from './create-vehicle/create-vehicle.component';
import { PokemonComponent } from './pokemon/pokemon.component';
import { StudentIdComponent } from './student-id/student-id.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PageNotFoundComponent,
    HomeComponent,
    DataBindingComponent,
    DirectivesComponent,
    CalculatorComponent,
    RegistrationComponent,
    AddEmployeeComponent,
    EmployeeComponent,
    VehicleComponent,
    AccountComponent,
    FlipkartComponent,
    WeatherComponent,
    ImdbComponent,
    BlogComponent,
    CreateVehicleComponent,
    PokemonComponent,
    StudentIdComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
