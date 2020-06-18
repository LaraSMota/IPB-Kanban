using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public partial class Collumn
    {
        public Collumn()
        {
            Card = new HashSet<Card>();
        }

        [Key]
        public int CollumnId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Title { get; set; }

        [Column(TypeName = "int")]
        public int? BoardId { get; set; }

        [Column(TypeName = "int")]
        public int? Position { get; set; }

        public virtual Board Board { get; set; }
        public virtual ICollection<Card> Card { get; set; }
    }
}
