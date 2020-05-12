import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeesComponent } from '../employees-component/employees.component';
import { EmployeeComponent } from '../employee-component/employee.component';

const routes: Routes = [
  { path: "employees", component: EmployeesComponent },
  { path: "employee/:EmpID", component: EmployeeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }

