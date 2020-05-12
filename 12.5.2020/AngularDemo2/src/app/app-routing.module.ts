import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home-component/home.component';
import { EmployeesComponent } from './employees-component/employees.component';
import { RegistrationComponent } from './registration-component/registration.component';
import { EmployeeComponent } from './employee-component/employee.component';

const routes: Routes = [
  { path: "home", component: HomeComponent },
  { path: "registration", component: RegistrationComponent },
  { path: "admin", loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},
  { path: "", redirectTo: "/home", pathMatch: "full" },

  // { path: "admin", children: [
  //   { path: "home", component: SomeComponent },
  //   { path: "about", component: SomeComponent },
  //   { path: "contact", component: SomeComponent },
  // ]}
  
  { path: "**", redirectTo: "/home" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }

