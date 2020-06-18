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
        public int BoardId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Title { get; set; }

        [Column(TypeName = "nvarchar(1000)")]
        public string Description { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Background { get; set; }

        [Column(TypeName = "int")]
        public int? TeamId { get; set; }

        public virtual Team Team { get; set; }
        public virtual ICollection<Collumn> Collumn { get; set; }
    }
}
