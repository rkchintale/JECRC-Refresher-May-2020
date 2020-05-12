using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace WebApiExample.ViewModels
{
    public class DeptAndEmpViewModel
    {
        public int EmpID { get; set; }
        public string EmpName { get; set; }
        public Nullable<decimal> Salary { get; set; }
        public Nullable<int> DeptNo { get; set; }
        public string DeptName { get; set; }
        public string Loc { get; set; }
    }
}


