using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace CRUD_MEMBERS_BOARD.Models
{
    public class card
    {
        [Key]
        public int id { get; set; }
        public string title { get; set; }
        public string comments { get; set; }
        public string attachments { get; set; }
        public string labels { get; set; }
        public DateTime dueDate { get; set; }
        public int importantState { get; set; }
        public string checklist { get; set; }

    }
}