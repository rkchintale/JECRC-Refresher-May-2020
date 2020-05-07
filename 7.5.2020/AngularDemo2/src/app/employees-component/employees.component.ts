import { Component } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeesService } from '../employees.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'employees-comp',
  templateUrl: "employees.component.html",
  styleUrls: [ "employees.component.css" ]
})
export class EmployeesComponent
{
  //properties
  employees: Employee[];

  //create property for reactive form
  newForm: FormGroup;

  //constructor
  constructor(private empService: EmployeesService)
  {
    this.employees = [];

    //create reactive form
    this.newForm = new FormGroup({
      EmpId: new FormControl(null, [Validators.required, Validators.min(100) ]),
      EmpName: new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z .]*$')]),
      Email: new FormControl(null, [Validators.email]),
    });
  }

  //ngOnInit
  ngOnInit()
  {
    this.empService.getEmployees().subscribe(

      (response: Employee[]) => {
        console.log(response);
        this.employees = response;
      }, //success

      (error) => {
        console.log(error);
      } //failure
    );
  }

  //methods
  onAddClick()
  {
    console.log(this.newForm.get("EmpId").untouched );

    if (this.newForm.valid == true)
    {
      //accessing value of any form control (textbox etc.)
      console.log(this.newForm.value.EmpId);

      //create emp object from the value of form
      //var emp = new Employee(this.newForm.value.EmpId, this.newForm.value.EmpName, this.newForm.value.Email);

      //add object to array
      //this.employees.push(emp);

      //clear textboxes
      this.newForm.reset();
    }
    else
    {
      console.log("Invalid data");
    }
  }
}



