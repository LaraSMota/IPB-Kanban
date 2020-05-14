using System;
using System.Collections.Generic;

namespace Back_End.Model
{
    public partial class UsersBoard
    {
        public int BoardId { get; set; }
        public int UsersId { get; set; }

        public virtual Board Board { get; set; }
        public virtual Users Users { get; set; }
    }
}
