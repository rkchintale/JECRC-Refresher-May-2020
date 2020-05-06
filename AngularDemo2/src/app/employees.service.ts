import { Injectable } from '@angular/core';
import { Employee } from './Employee';

@Injectable( )
export class EmployeesService
{
  getEmployees(): Employee[]
  {
    var emps = [
      new Employee(101, "Scott", "scott@gmail.com"),
      new Employee(103, "Smith", "smith@gmail.com"),
      new Employee(104, "Allen", "allen@gmail.com"),
      new Employee(105, "Ford", "ford@gmail.com"),
      new Employee(106, "John", "john@gmail.com"),
      new Employee(107, "Jones", "jones@gmail.com"),
      new Employee(108, "Jeff", "jeff@gmail.com")
    ];
    return emps;
  }
}

