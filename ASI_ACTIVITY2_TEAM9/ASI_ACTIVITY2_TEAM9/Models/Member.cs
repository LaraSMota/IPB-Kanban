using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace ASI_ACTIVITY2_TEAM9.Models
{
    public class Member
    {
        [Key]
        public int id { get; set; }
        public string name { get; set; }
        public string email { get; set; }
    }
}