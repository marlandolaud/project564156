using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace Shipbob.Tests
{
    [TestClass]
    public class HelperTest
    {
        [TestMethod]
        public void TestMethod1()
        {
            string word = "word";
            var sub = word.SubstringSafe(2, 5);
            Assert.AreEqual("rd", sub);
        }

        [TestMethod]
        public void TestMethod2()
        {
            string word = "word";
            var sub = word.SubstringSafe(3, 1);
            Assert.AreEqual("d", sub);
        }

        [TestMethod]
        public void TestMethod3()
        {
            string word = "word";
            var sub = word.SubstringSafe(3, 2);
            Assert.AreEqual("d", sub);
        }

        [TestMethod]
        public void TestMethod4()
        {
            string word = "abcdefghijklmnopqrstuvwzyz";
            var sub = word.SubstringSafe(0, 2);
            Assert.AreEqual("ab", sub);
        }
    }
}
