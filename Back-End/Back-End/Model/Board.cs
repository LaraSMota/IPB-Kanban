using System;
using System.Collections.Generic;

namespace Back_End.Model
{
    public partial class Board
    {
        public Board()
        {
            Collumn = new HashSet<Collumn>();
        }

        public int BoardId { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public string Background { get; set; }

        public virtual ICollection<Collumn> Collumn { get; set; }
    }
}
