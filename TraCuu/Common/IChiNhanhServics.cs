using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Rendering;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TraCuu.Domain;
using TraCuu.Models;

namespace TraCuu.Common
{
    public interface IChiNhanhService
    {

        // int _chinhanhid { get; set; }
        // string _cmnd { get; set; }
        // string _makhachhang { get; set; }
        // bool _tochuc { get; set; }
        //void KhachHang(string chinhanhid, string cmnd, string makhachhang, bool tochuc);
        SelectList cateList { get; set; }
        void get();
    }
}
