using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public class Card
    {
        [Key]
        public int cardId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string title { get; set; }

        [Column(TypeName = "nvarchar(1000)")]
        public string comments { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string attachments { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string labels { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public DateTime? dueDate { get; set; }

        [Column(TypeName = "nvarchar(1000)")]
        public string description { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string checklist { get; set; }

        [Column(TypeName = "int")]
        public int collumnId { get; set; }

        public virtual Collumn Collumn { get; set; }
    }
}
