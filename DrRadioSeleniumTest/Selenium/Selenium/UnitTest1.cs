using Microsoft.VisualStudio.TestTools.UnitTesting;
using OpenQA.Selenium;
using OpenQA.Selenium.Chrome;
using System.Threading;
using OpenQA.Selenium.Support.UI;

//install nuget selenium

namespace Selenium
{
    [TestClass]
    public class UnitTest1
    {
        //URL site you want to test
        const string URL = "http://localhost:3000/"; //".azurewebsites.net/"

        IWebDriver driver = new ChromeDriver();

        [TestInitialize]
        public void TestSetUp()
        {
            driver.Navigate().GoToUrl(URL);
        }

        [TestMethod]
        public void getByIDTest()
        {
            Thread.Sleep(3000);

            IWebElement IDInputElement = driver.FindElement(By.Name("getByIdInput"));
            IWebElement getByIDButton = driver.FindElement(By.Id("getbyIdBtn"));
            IWebElement resultElement = driver.FindElement(By.Id("recordDataResult"));

            IDInputElement.Clear();
            IDInputElement.SendKeys("1");
            getByIDButton.Click();

            Thread.Sleep(3000);

            var result = resultElement.Text;

            Assert.IsTrue(result.Contains("Wonder"));
            Thread.Sleep(3000);



            // for selecting dropdowns
            //IWebElement selectElement = driver.FindElement(By.Id("operation"));
            //var selectObject = new SelectElement(selectElement);
            //selectObject.SelectByValue("sub");
        }

        [TestCleanup]
        public void TestTearDown()
        {
            driver.Quit();
        }
    }
}
