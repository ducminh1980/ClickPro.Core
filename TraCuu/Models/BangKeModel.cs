using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;
using TraCuu.Domain;

namespace TraCuu.Models
{
    public class BangKeModel
    {
       
        [Key]
        public int id { get; set; }
        [Display(Name = "Chi nhánh gửi")]
        [Required(ErrorMessage = @"Chọn chi nhánh gửi!")]
        public int ChiNhanhID { get; set; }
        [Required(ErrorMessage = @"Nhập CMND\CCCD!")]
        [Display(Name = @"CMND\CCCD")]
       
        public string CMND { get; set; }
        [Required(ErrorMessage = "Nhập mã khách hàng!")]
        [Display(Name = @"Mã khách hàng:")]
        public string MaKhachHang { get; set; }
        public bool ToChuc { get; set; }
        [Display(Name = "Ngày gửi")]
        public DateTime NgayGui { get; set; }
        [Display(Name = "Số tiền gửi")]
        public decimal SoTienGui { get; set; }
        [Display(Name = "Thời hạn")]
        public int ThoiHan { get; set; }
        [Display(Name = @"Lãi suất (%/năm)")]
        public decimal LaiSuat { get; set; }
        [Display(Name = "Ngày tái tục gần nhất")]
        public DateTime NgayTaiTuc { get; set; }
        [Display(Name = "Số dư tiền gửi hiện tại")]
        [Column(TypeName = "decimal(14, 0)")]
        public decimal SoDu { get; set; }
        [Display(Name = "Ngày đến hạn")]
        public DateTime NgayDenHan { get; set; }
        [Display(Name = "Mã xác nhận")]
        [Required(ErrorMessage = @"Nhập mã xác nhận!")]
        public string CaptchaCode { get; set; }        

    }
}
