using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiExample.Models;

namespace WebApiExample.Controllers
{
    public class EmployeesController : ApiController
    {
        public List<Employee> Get()
        {
            //create object of DbContext class
            companyEntities db = new companyEntities();

            //LINQ query to fetch data from table
            List<Employee> emps = db.Employees.ToList();

            db.Configuration.LazyLoadingEnabled = false;
            return emps; //This List<Employee> will be automatically converted into json format (in case of request is sent by angular).
        }
    }
}


