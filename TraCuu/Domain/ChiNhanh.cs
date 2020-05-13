using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TraCuu.Domain
{
    public class ChiNhanh
    {
        [Key]
        public int Id { get; set; }
        public int ChiNhanhID { get; set; }
        public string TenChiNhanh { get; set; }
       
    }
}
