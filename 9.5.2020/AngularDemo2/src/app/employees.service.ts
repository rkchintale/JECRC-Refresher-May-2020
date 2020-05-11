import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { map } from "rxjs/operators";

@Injectable( )
export class EmployeesService
{
  constructor(private httpClient: HttpClient)
  {
  }

  apiPrefix: string = "http://localhost:55818";

  getEmployees(): Observable<Employee[]>
  {
    return this.httpClient.get<Employee[]>(this.apiPrefix + "/api/employees").pipe(map((employees) => {
      
      for (let i = 0; i < employees.length; i++)
      {
        employees[i].Salary = employees[i].Salary * 12; //conversion from monthly sal into annual sal
      }

      return employees;
    }));
  }

  getEmployeeByEmpID(empID: number): Observable<Employee>
  {
    return this.httpClient.get<Employee>(this.apiPrefix + `/api/employees?EmpID=${empID}`);
  }

  postEmployee(emp: Employee)
  {
    return this.httpClient.post<Employee>(this.apiPrefix + "/api/employees", emp);
  }

  putEmployee(emp: Employee)
  {
    return this.httpClient.put<Employee>(this.apiPrefix + "/api/employees", emp);
  }

  deleteEmployee(empID: number)
  {
    return this.httpClient.delete(this.apiPrefix + "/api/employees?EmpID=" + empID, { responseType: "text" });
  }
}




//200 = OK
//400 = Bad Request
//404 = Not Found
//500 = Internal Server Error (exception at server side)
