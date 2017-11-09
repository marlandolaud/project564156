using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using Shipbob.Models;

namespace Shipbob.Controllers
{
    [Authorize]
    public class OrdersController : Controller
    {
        private ShipbopContext db = new ShipbopContext();     

        public ActionResult UserOrder(int? userId)
        {
            User user = db.Users.Find(userId);
            if (user == null)
            {
                return HttpNotFound();
            }
            ViewBag.Name = $"{user.FirstName} {user.LastName}";
            return View();
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}
