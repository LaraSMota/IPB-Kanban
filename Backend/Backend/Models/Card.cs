using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace Backend.Models
{
    public partial class Card
    {
        [Key]
        public int CardId { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Title { get; set; }

        [Column(TypeName = "nvarchar(1000)")]
        public string Comments { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Attachments { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Lables { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public DateTime? DueDate { get; set; }

        [Column(TypeName = "nvarchar(1000)")]
        public string Description { get; set; }

        [Column(TypeName = "nvarchar(100)")]
        public string Checklist { get; set; }

        [Column(TypeName = "int")]
        public int? CollumnId { get; set; }

        [Column(TypeName = "int")]
        public int? Position { get; set; }

        public virtual Collumn Collumn { get; set; }
    }
}
