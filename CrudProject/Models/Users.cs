using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace CrudProject.Models
{
    public class Users
    {
        [Key]
        public int Id { get; set; } 
        public char Name { get; set; }
        public int Age { get; set; }
        public char Email { get; set; }
        public char Password { get; set; }

        public Users()
        {

        }

        public Users(int id, char name,int age, char email, char password)
        {
            this.Id = id;
            this.Name = name;
            this.Age = age;
            this.Email = email;
            this.Password = password;
        }

    }
}
