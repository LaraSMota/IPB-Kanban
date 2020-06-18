using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public partial class UsersBoard
    {
        [Column(TypeName = "int")]
        public int? UsersId { get; set; }

        [Column(TypeName = "int")]
        public int? BoardId { get; set; }

        public virtual Board Board { get; set; }
        public virtual Users Users { get; set; }
    }
}
