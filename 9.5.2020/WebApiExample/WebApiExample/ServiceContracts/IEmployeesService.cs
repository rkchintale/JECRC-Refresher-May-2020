using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using WebApiExample.Models;

namespace WebApiExample.ServiceContracts
{
    public interface IEmployeesService
    {
        List<Employee> GetEmployees();
    }
}


