import { Injectable } from '@angular/core';
import { Employee } from './Employee';
import { HttpClient } from "@angular/common/http";

@Injectable( )
export class EmployeesService
{
  constructor(private httpClient: HttpClient)
  {
  }

  apiPrefix: string = "http://localhost:55818";

  getEmployees()
  {
    return this.httpClient.get<Employee[]>(this.apiPrefix + "/api/employees");
  }
}



//200 = OK
//400 = Bad Request
//404 = Not Found
//500 = Internal Server Error (exception at server side)
