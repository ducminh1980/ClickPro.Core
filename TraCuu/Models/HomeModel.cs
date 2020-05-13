using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TraCuu.Models
{
    public class HomeModel
    {
        [Key]
        public int Id { get; set; }
        public int ChiNhanhID { get; set; }
        public string TenChiNhanh { get; set; }
        public string CaptchaCode { get; set; }
        

    }
}
