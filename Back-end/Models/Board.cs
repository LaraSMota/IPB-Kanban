using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public partial class Board
    {

        public Board()
        {
            Collumn = new HashSet<Collumn>();
        }

        [Key]
        public int boardId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string title { get; set; }

        [Column(TypeName = "nvarchar(1000)")]
        public string description { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string background { get; set; }

        public virtual ICollection<Collumn> Collumn { get; set; }
        
    }
}
