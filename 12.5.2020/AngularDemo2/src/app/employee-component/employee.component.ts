import { Component } from "@angular/core";
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../employees.service';
import { Employee } from '../Employee';

@Component({
  selector: "app-employee",
  templateUrl: "./employee.component.html",
  styleUrls: [ "./employee.component.css" ]
})
export class EmployeeComponent
{
  currentEmpID: number;
  currentEmployee: Employee;

  constructor(private activatedRoute: ActivatedRoute, private employeesService: EmployeesService)
  {
    this.currentEmpID = 0;
    this.currentEmployee = new Employee(null, null, null, null);
  }

  ngOnInit()
  {
    //receiving router parameter
    this.activatedRoute.params.subscribe((params) => {
      this.currentEmpID = params["EmpID"];

      //call http request to     /api/employees/1
      this.employeesService.getEmployeeByEmpID(this.currentEmpID).subscribe(

        (response: Employee) => {
          this.currentEmployee = response;
        }, //success

        (error) => {
          console.log(error);
        }, //failure
      );

    });
  }
}

