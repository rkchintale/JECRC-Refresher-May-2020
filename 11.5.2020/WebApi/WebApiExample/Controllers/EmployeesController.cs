using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Text.RegularExpressions;
using System.Web.Http;
using WebApiExample.Models;
using WebApiExample.ServiceContracts;
using WebApiExample.Services;

namespace WebApiExample.Controllers
{
    public class EmployeesController : ApiController
    {
        IEmployeesService employeesService;

        public EmployeesController()
        {
            employeesService = new EmployeesService();
        }

        //Accept Get request
        public List<Employee> Get()
        {
            //call service method to fetch data
            List<Employee> emps = employeesService.GetEmployees();

            return emps; //This List<Employee> will be automatically converted into json format (in case of request is sent by angular).
        }

        //Accept Get request based on parameter 'EmpID'
        public Employee Get(int EmpID)
        {
            //create object of DbContext class
            companyEntities db = new companyEntities();

            //LINQ query to fetch data from table
            Employee emp = db.Employees.Where(temp => temp.EmpID == EmpID).FirstOrDefault();

            db.Configuration.LazyLoadingEnabled = false;
            return emp; //This Employee will be automatically converted into json format (in case of request is sent by angular).
        }


        //Accept Post request
        public Employee Post(Employee emp)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    //create object of DbContext class
                    companyEntities db = new companyEntities();

                    //insert data to DbSet
                    db.Employees.Add(emp);
                    db.SaveChanges();

                    return emp;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        //Accept Put request
        public Employee Put(Employee emp)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    //create object of DbContext class
                    companyEntities db = new companyEntities();

                    //fetch existing object from db
                    Employee matchingEmp = db.Employees.Where(temp => temp.EmpID == emp.EmpID).FirstOrDefault();
                    matchingEmp.EmpName = emp.EmpName;
                    matchingEmp.DeptNo = emp.DeptNo;
                    matchingEmp.Salary = emp.Salary;

                    //update into db
                    db.SaveChanges();

                    return matchingEmp;
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }


        //Accept Delete request
        public string Delete(int EmpID)
        {
            try
            {
                if (ModelState.IsValid)
                {
                    //create object of DbContext class
                    companyEntities db = new companyEntities();

                    //fetch existing object from db
                    Employee matchingEmp = db.Employees.Where(temp => temp.EmpID == EmpID).FirstOrDefault();
                    db.Employees.Remove(matchingEmp);

                    //delete from db
                    db.SaveChanges();

                    return "Successfully Deleted";
                }
                else
                {
                    return null;
                }
            }
            catch (Exception ex)
            {
                throw ex;
            }
        }
    }
}


