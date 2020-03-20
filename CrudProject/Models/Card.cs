using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CrudProject.Models
{
    public class Card
    {
        [Key]
        public int Id { get; set; }
        public char Title { get; set; }
        public char Comments { get; set; }
        public char Attachments { get; set; }
        public char Labels { get; set; }
        public int ImportantState { get; set; }
        public char Checklist { get; set; }
        public DateTime Duedate { get; set; }

        public Card()
        {

        }

        public Card(int id, char title, char comments, char attachments, char labels, int importantstate, char checklist, DateTime duedate)
        {
            this.Id = id;
            this.Title = title;
            this.Comments = comments;
            this.Attachments = attachments;
            this.Labels = labels;
            this.ImportantState = importantstate;
            this.Checklist = checklist;
            this.Duedate = duedate;
         
        }
       
    }
}
