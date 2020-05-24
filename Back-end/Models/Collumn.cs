using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Collumn
    {

        public Collumn()
        {
            Card = new HashSet<Card>();
        }

        [Key]
        public int collumnId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string title { get; set; }

        [Column(TypeName = "int")]
        public int boardId { get; set; }

        public virtual Board Board { get; set; }
        public virtual ICollection<Card> Card { get; set; }
    }
}
