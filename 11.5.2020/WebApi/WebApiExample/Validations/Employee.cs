using System;
using System.ComponentModel.DataAnnotations;

namespace WebApiExample.Models
{
    public interface IEmployee
    {
        //EmpID should not be blank
        [Required]
        //[RegularExpression(@"^([0-2][0-9]|(3)[0-1])(\/)(((0)[0-9])|((1)[0-2]))(\/)\d{4}$")]
        int EmpID { get; set; }
    }

    //Add validation attributes to Employee model class
    [MetadataType(typeof(IEmployee))]
    public partial class Employee
    {
        //empty
    }
}

