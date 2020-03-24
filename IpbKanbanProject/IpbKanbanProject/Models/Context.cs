﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;

namespace IpbKanbanProject.Models
{

    public class Context : DbContext
    {
        public Context(DbContextOptions<Context> options)
            : base(options)
        {
        }

        public DbSet<Card> Cards { get; set; }

        public DbSet<Board> Board { get; set; }

        public DbSet<Column> Columns { get; set; }

        public DbSet<User> Users { get; set; }
    }
}
