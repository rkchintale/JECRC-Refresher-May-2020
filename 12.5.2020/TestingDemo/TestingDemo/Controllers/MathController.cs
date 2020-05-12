using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace TestingDemo.Controllers
{
    public class MathController : ApiController
    {
        public int Multiply(int a, int b)
        {
            int c = a * b;
            return c;
        }
    }
}


