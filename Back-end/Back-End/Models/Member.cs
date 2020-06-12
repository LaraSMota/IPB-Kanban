using System;
using System.Collections.Generic;

namespace Back_End.Models
{
    public partial class Member
    {
        public int MemberId { get; set; }
        public int PermitionLevel { get; set; }
        public int UsersId { get; set; }
        public int TeamId { get; set; }

        public virtual Team Team { get; set; }
        public virtual Users Users { get; set; }
    }
}
