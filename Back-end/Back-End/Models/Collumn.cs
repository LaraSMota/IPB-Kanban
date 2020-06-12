using System;
using System.Collections.Generic;

namespace Back_End.Models
{
    public partial class Collumn
    {
        public Collumn()
        {
            Card = new HashSet<Card>();
        }

        public int CollumnId { get; set; }
        public string Title { get; set; }
        public int? BoardId { get; set; }
        public int? Position { get; set; }

        public virtual Board Board { get; set; }
        public virtual ICollection<Card> Card { get; set; }
    }
}
