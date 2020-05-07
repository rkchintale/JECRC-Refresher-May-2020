export class Employee
{
  EmpID: number;
  EmpName: string;
  DeptNo: number;
  Salary: number;

  constructor(empId: number, empName: string, deptNo: number, salary: number)
  {
    this.EmpID = empId;
    this.EmpName = empName;
    this.DeptNo = deptNo;
    this.Salary = salary;
  }
}


