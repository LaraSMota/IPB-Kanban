using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public partial class Team
    {
        public Team()
        {
            Board = new HashSet<Board>();
            Member = new HashSet<Member>();
        }

        [Key]
        public int TeamId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Title { get; set; }

        public virtual ICollection<Board> Board { get; set; }
        public virtual ICollection<Member> Member { get; set; }
    }
}
