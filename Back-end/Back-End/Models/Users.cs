using System;
using System.Collections.Generic;

namespace Back_End.Models
{
    public partial class Users
    {
        public Users()
        {
            Member = new HashSet<Member>();
        }

        public int UsersId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string Nickname { get; set; }
        public string Password { get; set; }
        public string Picture { get; set; }
        public string BeNotified { get; set; }

        public virtual ICollection<Member> Member { get; set; }
    }
}
