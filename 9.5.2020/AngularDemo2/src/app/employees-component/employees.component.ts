import { Component } from '@angular/core';
import { Employee } from '../Employee';
import { EmployeesService } from '../employees.service';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'employees-comp',
  templateUrl: "employees.component.html",
  styleUrls: [ "employees.component.css" ]
})
export class EmployeesComponent
{
  //properties
  employees: Employee[];
  loaded: boolean = false;

  //create property for reactive form
  newForm: FormGroup;

  //constructor
  constructor(public empService: EmployeesService, private router: Router)
  {
    this.employees = [];

    //create reactive form
    this.newForm = new FormGroup({
      EmpID: new FormControl(null, [Validators.required, Validators.pattern('^[0-9]*$') ]),
      EmpName: new FormControl(null, [Validators.required, Validators.pattern('^[A-Za-z .]*$')]),
      DeptNo: new FormControl(null, [ Validators.pattern('^[0-9]*$') ]),
      Salary: new FormControl(null, [ Validators.pattern('^[0-9]*$') ]),
    });
  }

  //ngOnInit
  ngOnInit()
  {
    this.empService.getEmployees().subscribe(

      (response: Employee[]) => {
        console.log(response);

        //sort based on EmpName
        /*response = response.sort(
          (a, b) => (a.EmpName > b.EmpName) ? 1 : (a.EmpName === b.EmpName) ? ((a.EmpName > b.EmpName) ? 1 : -1) : -1 );*/


        this.employees = response;
        this.loaded = true;
      }, //success

      (error) => {
        console.log(error);
        //this.message = "Unable to load data";
      } //failure
    );
  }


  //methods
  onAddClick()
  {
    //console.log(this.newForm.get("EmpId").untouched );

    if (this.newForm.valid == true)
    {

      //navigate to other route
      //this.router.navigate( [ '/path' ] );

      //accessing value of any form control (textbox etc.)
      console.log(this.newForm.value.EmpId);

      //create emp object from the value of form
      var emp = new Employee(this.newForm.value.EmpID, this.newForm.value.EmpName, this.newForm.value.DeptNo, this.newForm.value.Salary);

      //call service
      this.empService.postEmployee(emp).subscribe(
        (response) => {
          console.log(response);

          //add object to array
          this.employees.push(emp);
        }, //success

        (error) => {
          console.log(error);

        } //error
      );

      

      //clear textboxes
      this.newForm.reset();
    }
    else
    {
      console.log("Invalid data");
    }
  }
}



