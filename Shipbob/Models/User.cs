using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace Shipbob.Models
{
    public class User
    {
        public int UserId { get; set; }

        [Required(ErrorMessage = "First Name is Required")]
        [DisplayName("First Name")]
        [StringLength(160)]
        public string FirstName { get; set; }

        [Required(ErrorMessage = "Last Name is Required")]
        [DisplayName("Last Name")]
        [StringLength(160)]
        public string LastName { get; set; }

        public virtual ICollection<Order> Orders { get; set; }
    }
}