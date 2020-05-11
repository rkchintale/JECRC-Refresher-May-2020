import { NgModule } from "@angular/core";
import { NumberToWordsPipe } from '../number-to-words.pipe';
import { EmployeesComponent } from '../employees-component/employees.component';
import { EmployeeComponent } from '../employee-component/employee.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin.routing';

@NgModule({
  declarations: [
    NumberToWordsPipe,
    EmployeesComponent,
    EmployeeComponent
  ],
  exports: [
    NumberToWordsPipe,
    EmployeesComponent,
    EmployeeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule
{
}


