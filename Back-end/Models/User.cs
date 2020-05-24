using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class User
    {
        [Key]
        public int userId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string firstName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string lastName { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string email { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string nickname { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string password { get; set; }
    }
}
