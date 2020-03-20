using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CrudProject.Models
{
    public class Board
    {
        [Key]
        public int Id { get; set; }
        public char Title { get; set; }

        public Board()
        {

        }

        public Board(int id, char title)
        {
            this.Id = id;
            this.Title = title;
        }

    }
}
