using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace TraCuu.Domain
{
    public class ChiTietTKCKH
    {
        [Key]
        public int Id { get; set; }
        [Display(Name = "Chi nhánh gửi")]
        [Required(ErrorMessage = @"Chọn chi nhánh gửi")]
        [Column(TypeName = "decimal(4, 0)")]
        public int ChiNhanhID { get; set; }
        [Required(ErrorMessage = @"Nhập CMND\CCCD")]
        [Display(Name = @"CMND\CCCD")]
        [Column(TypeName = "varchar(20)")]
        public string CMND { get; set; }
        [Required(ErrorMessage = "Nhập mã khách hàng")]
        [Display(Name = @"Mã khách hàng:")]
        [Column(TypeName = "varchar(20)")]
        public string MaKhachHang { get; set; }
        public bool ToChuc { get; set; }
        [Display(Name = "Ngày gửi")]
        public DateTime NgayGui { get; set; }
        [Display(Name = "Số tiền gửi")]
        [Column(TypeName = "decimal(14, 0)")]
        public decimal SoTienGui { get; set; }
        [Display(Name = "Thời hạn")]
        [Column(TypeName = "decimal(4, 0)")]
        public int ThoiHan { get; set; }
        [Display(Name = "Lãi suất")]
        [Column(TypeName = "decimal(4, 2)")]
        public decimal LaiSuat { get; set; }
        [Display(Name = "Ngày tái tục gần nhất")]
        public DateTime NgayTaiTuc { get; set; }
        [Display(Name = "Số dư tiền gửi hiện tại")]
        [Column(TypeName = "decimal(14, 0)")]
        public decimal SoDu { get; set; }
        [Display(Name = "Ngày đến hạn")]
        public DateTime NgayDenHan { get; set; }    
        
        
    }
    
}
