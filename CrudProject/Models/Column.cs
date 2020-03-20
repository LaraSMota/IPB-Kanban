using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CrudProject.Models
{
    public class Column
    {
        [Key]
        public int Id { get; set; }
        public char Title { get; set; }

        public int BoardId { get; set; }

        public Column()
        {

        }

        public Column (int id, char title, int boardid)
        {
            this.Id = id;
            this.Title = title;
            this.BoardId = boardid;
        }

    }
}
