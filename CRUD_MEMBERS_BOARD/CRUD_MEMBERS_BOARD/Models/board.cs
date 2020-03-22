using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CRUD_MEMBERS_BOARD.Models
{
    public class board
    {
        [Key]
        public int id { get; set; }
        public string title { get; set; }
    }
}