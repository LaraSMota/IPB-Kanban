using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data.Entity;

namespace CRUD_MEMBERS_BOARD.Models
{
    public class context : DbContext
    {
        public DbSet<member> Members { get; set; }
    }
}