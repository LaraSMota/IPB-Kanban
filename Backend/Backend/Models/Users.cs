using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public partial class Users
    {
        public Users()
        {
            Member = new HashSet<Member>();
        }

        [Key]
        public int UsersId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string FirstName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string LastName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Email { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Nickname { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Password { get; set; }

        [Column(TypeName = "nvarchar(500)")]
        public string Picture { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string BeNotified { get; set; }

        public virtual ICollection<Member> Member { get; set; }
    }
}
