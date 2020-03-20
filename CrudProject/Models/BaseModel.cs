using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.Serialization;
using System.Threading.Tasks;

namespace CrudProject.Models
{
    public class BaseModel
    {
        [DataMember]
        public int Id { get; protected set; }
    }
}

