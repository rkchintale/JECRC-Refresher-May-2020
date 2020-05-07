import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-component/home.component';
import { EmployeesComponent } from './employees-component/employees.component';
import { RegistrationComponent } from './registration-component/registration.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "employees", component: EmployeesComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

