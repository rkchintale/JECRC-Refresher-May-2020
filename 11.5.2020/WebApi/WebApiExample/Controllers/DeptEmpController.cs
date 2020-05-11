using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiExample.Models;
using WebApiExample.ViewModels;

namespace WebApiExample.Controllers
{
    public class DeptEmpController : ApiController
    {
        //Accept Get request
        public List<DeptAndEmpViewModel> Get()
        {
            //create object of DbContext class
            companyEntities db = new companyEntities();

            //LINQ query to fetch data from both tables
            List<Employee> emps = db.Employees.ToList();

            //create empty collection of ViewModel
            List<DeptAndEmpViewModel> finalData = new List<DeptAndEmpViewModel>();

            foreach (var item in emps)
            {
                finalData.Add(
                    new DeptAndEmpViewModel()
                    {
                        EmpID = item.EmpID,
                        EmpName = item.EmpName,
                        Salary = item.Salary,
                        DeptNo = item.DeptNo,
                        DeptName = item.Department.DeptName,
                        Loc = item.Department.Loc
                    });
            }

            return finalData; //This List<Employee> will be automatically converted into json format (in case of request is sent by angular).
        }




        //Second way
        //Accept Get request
        public List<DeptAndEmpViewModel> Get2()
        {
            //create object of DbContext class
            companyEntities db = new companyEntities();

            //LINQ query to fetch data from both tables
            List<DeptAndEmpViewModel> finalData = db.Employees
                .Select(temp => new DeptAndEmpViewModel()
                {
                    EmpID = temp.EmpID,
                    EmpName = temp.EmpName,
                    Salary = temp.Salary,
                    DeptNo = temp.DeptNo,
                    DeptName = temp.Department.DeptName,
                    Loc = temp.Department.Loc
                }
                ).ToList();

            return finalData; //This List<DeptAndEmpViewModel> will be automatically converted into json format (in case of request is sent by angular).
        }



        //Third way
        //Accept Get request
        public List<DeptAndEmpViewModel> Get3()
        {
            //create object of DbContext class
            companyEntities db = new companyEntities();

            //LINQ query to fetch data from both tables
            List<DeptAndEmpViewModel> finalData =
               (from emp in db.Employees // outer sequence
                join dept in db.Departments //inner sequence 
                on emp.DeptNo equals dept.DeptNo // key selector 
                select new DeptAndEmpViewModel()
                {
                    EmpID = emp.EmpID,
                    EmpName = emp.EmpName,
                    Salary = emp.Salary,
                    DeptNo = emp.DeptNo,
                    DeptName = dept.DeptName,
                    Loc = dept.Loc
                }).ToList();

            return finalData; //This List<DeptAndEmpViewModel> will be automatically converted into json format (in case of request is sent by angular).
        }
    }
}
