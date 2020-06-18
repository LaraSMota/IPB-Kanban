using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public partial class Member
    {
        [Key]
        public int MemberId { get; set; }

        [Column(TypeName = "int")]
        public int PermitionLevel { get; set; }

        [Column(TypeName = "int")]
        public int UsersId { get; set; }

        [Column(TypeName = "int")]
        public int TeamId { get; set; }

        public virtual Team Team { get; set; }
        public virtual Users Users { get; set; }
    }

}
