using System;
using System.Collections.Generic;
using System.Data.Entity.Core.Metadata.Edm;
using System.Linq;
using System.Web;
using WebApiExample.Models;
using WebApiExample.ServiceContracts;

namespace WebApiExample.Services
{
    public class EmployeesService : IEmployeesService
    {
        public List<Employee> GetEmployees()
        {
            //create object of DbContext class
            using (companyEntities db = new companyEntities())
            {
                //LINQ query to fetch data from table
                List<Employee> emps = db.Employees.ToList();

                db.Configuration.LazyLoadingEnabled = false;
                return emps; //This List<Employee> will be automatically converted into json format (in case of request is sent by angular).
            }
        }

        //Calling StoredProc
        public List<ComplexType1> GetEmpDetails()
        {
            //create object of DbContext class
            companyEntities db = new companyEntities();

            var result = db.usp_GetEmpDetails().ToList();

            return result;
        }
    }
}


