using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;


namespace Shipbob.Models
{
    public class ShipbopContext: DbContext
    {
        public ShipbopContext() : base("DefaultConnection")
        {
        }

        public DbSet<User> Users { get; set; }

        public DbSet<Order> Orders { get; set; }        
    }
}