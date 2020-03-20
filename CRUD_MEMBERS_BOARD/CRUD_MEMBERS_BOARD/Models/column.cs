using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CRUD_MEMBERS_BOARD.Models
{
    public class column
    {
        [Key]
        public int id_column { get; set; }
        public string Title { get; set; }
        public int BoardId { get; set; }
    }
}