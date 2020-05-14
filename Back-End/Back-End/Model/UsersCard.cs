using System;
using System.Collections.Generic;

namespace Back_End.Model
{
    public partial class UsersCard
    {
        public int CardId { get; set; }
        public int UsersId { get; set; }

        public virtual Card Card { get; set; }
        public virtual Users Users { get; set; }
    }
}
