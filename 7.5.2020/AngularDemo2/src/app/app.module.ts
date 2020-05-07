import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeesService } from "./employees.service";
import { NumberToWordsPipe } from './number-to-words.pipe';
import { HomeComponent } from './home-component/home.component';
import { RegistrationComponent } from './registration-component/registration.component';
import { EmployeesComponent } from './employees-component/employees.component';


@NgModule({
  declarations: [
    AppComponent,
    NumberToWordsPipe,
    HomeComponent,
    RegistrationComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ EmployeesService ],
  bootstrap: [AppComponent]
})
export class AppModule { }

