using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace IpbKanbanProject.Models
{
    public class Card
    {
        [Key]
        public int Id { get; set; }
        public string Title { get; set; }
        public string Comments { get; set; }
        public string Attachments { get; set; }
        public string Labels { get; set; }
        public DateTime DueDate { get; set; }
        public int ImportantState { get; set; }
        public string Checklist { get; set; }
    }
}
