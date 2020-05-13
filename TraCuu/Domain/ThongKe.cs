﻿using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TraCuu.Domain
{
    public class ThongKe
    {
        [Key]
        public int Id { get; set; }
        public int Online { get; set; }
        public int TruyCap { get; set; }
        public int XemTietKiem { get; set; }
    }
}