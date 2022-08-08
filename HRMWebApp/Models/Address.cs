using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace HRMWebApp.Models
{
    public class Address
    {
        public int AddressID { get; set; }
        [Required]
        public int UnitNo { get; set; }
        [Required]
        public string Street { get; set; }
        [Required]
        public string City { get; set; }
        [Required]
        public int Zip { get; set; }
        [Required]
        public int CustomerID { get; set; }

        public Customer Customer { get; set; }
    }
}
