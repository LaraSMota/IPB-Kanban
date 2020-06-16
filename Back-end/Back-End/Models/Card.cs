﻿using System;
using System.Collections.Generic;

namespace Back_End.Models
{
    public partial class Card
    {
        public int CardId { get; set; }
        public string Title { get; set; }
        public string Comments { get; set; }
        public string Attachments { get; set; }
        public string Lables { get; set; }
        public DateTime? DueDate { get; set; }
        public string Description { get; set; }
        public string Checklist { get; set; }
        public int? CollumnId { get; set; }
        public int? Position { get; set; }

        public virtual Collumn Collumn { get; set; }
    }
}