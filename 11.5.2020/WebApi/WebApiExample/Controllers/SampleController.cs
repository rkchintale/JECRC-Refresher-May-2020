using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace WebApiExample.Controllers
{
    public class SampleController : ApiController
    {
        public string Get(string name)
        {
            return "Hello to " + name;
        }
    }
}

