
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using TraCuu.Domain;
using TraCuu.Models;

namespace TraCuu.Common
{
    public class ChiNhanhService: IChiNhanhService
    {
        //public int _chinhanhid { get; set; }
        //public string _cmnd { get; set; }
        //public string _makhachhang { get; set; }
        //public bool _tochuc { get; set; }
        //public void KhachHang(string chinhanhid, string cmnd, string makhachhang, bool tochuc)
        //{
        //    _chinhanhid =Convert.ToInt32(bussiness.giaimamd5( chinhanhid));
        //    _cmnd = bussiness.giaimamd5(cmnd);
        //    _makhachhang = bussiness.giaimamd5(makhachhang);
        //    _tochuc = tochuc;
        //}

        private List<ChiNhanh> chinhanhs { get; set; }
        public SelectList cateList { get; set; }
        public void get()
        {
            chinhanhs= ChiNhanhData.Orders;
            cateList= new SelectList(chinhanhs, "ChiNhanhID", "TenChiNhanh");
        }
        //public async Task<IActionResult> Get(DataSourceLoadOptions loadOptions)
        //{

        //    DataContext context = new DataContext();
        //    var chitiettkckh = context.ChiTietTKCKH.Select(i => new
        //    {
        //        i.Id,
        //        i.ChiNhanhID,
        //        i.CMND,
        //        i.MaKhachHang,
        //        i.ToChuc,
        //        i.NgayGui,
        //        i.SoTienGui,
        //        i.ThoiHan,
        //        i.LaiSuat,
        //        i.NgayTaiTuc,
        //        i.SoDu,
        //        i.NgayDenHan
        //    }).Where(p => p.ChiNhanhID == _chinhanhid && p.CMND == _cmnd && p.MaKhachHang == _makhachhang && p.ToChuc == _tochuc);
        //    var a = Json(await DataSourceLoader.LoadAsync(chitiettkckh, loadOptions));            
        //    return  a;
        //}
    }
}
