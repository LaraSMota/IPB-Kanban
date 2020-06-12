using System;
using System.Collections.Generic;

namespace Back_End.Models
{
    public partial class Team
    {
        public Team()
        {
            Board = new HashSet<Board>();
            Member = new HashSet<Member>();
        }

        public int TeamId { get; set; }
        public string Title { get; set; }

        public virtual ICollection<Board> Board { get; set; }
        public virtual ICollection<Member> Member { get; set; }
    }
}
