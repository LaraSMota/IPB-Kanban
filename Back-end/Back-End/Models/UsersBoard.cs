using System;
using System.Collections.Generic;

namespace Back_End.Models
{
    public partial class UsersBoard
    {
        public int? UsersId { get; set; }
        public int? BoardId { get; set; }

        public virtual Board Board { get; set; }
        public virtual Users Users { get; set; }
    }
}
