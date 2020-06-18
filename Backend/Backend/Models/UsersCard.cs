using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public partial class UsersCard
    {
        [Column(TypeName = "int")]
        public int? CardId { get; set; }

        [Column(TypeName = "int")]
        public int? UsersId { get; set; }

        public virtual Card Card { get; set; }
        public virtual Users Users { get; set; }
    }
}
