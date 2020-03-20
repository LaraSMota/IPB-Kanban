using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace ASI_ACTIVITY2_TEAM9.Models
{
    public class Context : DbContext
    {
        public DbSet <Member> Members { get; set; }
    }
}