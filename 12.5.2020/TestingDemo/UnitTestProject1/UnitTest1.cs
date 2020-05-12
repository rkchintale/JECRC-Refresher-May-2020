using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using TestingDemo.Controllers;

namespace UnitTestProject1
{
    [TestClass]
    public class UnitTest1
    {
        [TestMethod]
        public void TestMethod1()
        {
            MathController mathController = new MathController();
            int actual = mathController.Multiply(10, 20);

            int expected = 200;
            Assert.AreEqual(expected, actual);
        }

        [TestMethod]
        public void TestMethod2()
        {
        }
    }
}
