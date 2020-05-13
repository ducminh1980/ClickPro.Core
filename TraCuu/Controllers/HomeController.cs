using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using BotDetect.Web.Mvc;
using DevExtreme.AspNet.Data;
using DevExtreme.AspNet.Mvc;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using TraCuu.Common;
using TraCuu.Domain;
using TraCuu.Models;

namespace TraCuu.Controllers
{
    public class HomeController : Controller
    {
        //public readonly IChiNhanhService _IChiNhanhService;
        //public  HomeController(IChiNhanhService IChiNhanhService)
        //{
        //    _IChiNhanhService = IChiNhanhService;            
        //}

        private readonly IHttpContextAccessor _httpContextAccessor;

        public HomeController(IHttpContextAccessor httpContextAccessor)
        {
            _httpContextAccessor = httpContextAccessor;
        }
        [HttpGet]
        //[AllowAnonymous]       
        public async Task<IActionResult> BangKe(string id1, string id2, string id3, string id4)
        {
            if (HttpContext.Session.GetString(CommonConstants.USER_SESSION)==null)
            {
                return RedirectToAction("Index", "Home");
            }
            else
            {
                using (var context = new DataContext())
                {
                    IEnumerable<BangKeModel> categories = await context.ChiTietTKCKH.Select(x => new BangKeModel
                    {
                        id = x.Id,
                        ChiNhanhID = x.ChiNhanhID,
                        CMND = x.CMND,
                        MaKhachHang = x.MaKhachHang,
                        ToChuc = x.ToChuc,
                        NgayGui = x.NgayGui,
                        SoTienGui = x.SoTienGui,
                        ThoiHan = x.ThoiHan,
                        LaiSuat = x.LaiSuat,
                        NgayTaiTuc = x.NgayTaiTuc,
                        SoDu = x.SoDu,
                        NgayDenHan = x.NgayDenHan
                    }).Where(p => p.ChiNhanhID == Convert.ToInt32(bussiness.giaimamd5(id1)) && p.CMND == bussiness.giaimamd5(id2) && p.MaKhachHang == bussiness.giaimamd5(id3) && p.ToChuc == Convert.ToBoolean(bussiness.giaimamd5(id4))).ToListAsync();

                    return View(categories);
                }
            }
            
            
        }
        public async Task<IActionResult> Index()
        {          
            using (var dataContext = new DataContext())
            {
                try
                {
                    var thongke = await dataContext.ThongKe.FirstOrDefaultAsync(e => e.Id == 1);
                    thongke.TruyCap++;
                    dataContext.SaveChanges();
                    return View();
                }
                catch
                {
                    return View();
                }
               
            }          
            
        }
        
        [HttpPost]
        [AllowAnonymous]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Index( int chinhanhid, string cmnd, string makhachhang, bool tochuc)
        {
            //_IChiNhanhService.get();
            //ViewBag.CategoryList = _IChiNhanhService.cateList;

            string userInput = HttpContext.Request.Form["CaptchaCode"];
            // init mvcCaptcha instance with captchaId
            MvcCaptcha mvcCaptcha = new MvcCaptcha("registerCapcha");
           
            if (mvcCaptcha.Validate(userInput))            {
               
                using (var context = new DataContext())
                {
                    IEnumerable<BangKeModel> categories = await context.ChiTietTKCKH.Select(x => new BangKeModel
                    {
                        id = x.Id,
                        ChiNhanhID = x.ChiNhanhID,
                        CMND = x.CMND,
                        MaKhachHang = x.MaKhachHang,
                        ToChuc = x.ToChuc,
                    }).Where(p => p.ChiNhanhID == chinhanhid && p.CMND == cmnd.Trim() && p.MaKhachHang == makhachhang.Trim().ToUpper() && p.ToChuc == tochuc).ToListAsync();// line 2;

                    if (categories.Count() > 0)
                    {
                        HttpContext.Session.SetString(CommonConstants.USER_SESSION, bussiness.mahoamd5(cmnd.Trim()));
                        
                        try
                        {
                            ThongKe f = await context.ThongKe.FirstOrDefaultAsync(e => e.Id == 1);
                            f.XemTietKiem++;
                            context.SaveChanges();
                        }
                        catch   { }
                        return RedirectToAction("BangKe", "Home", new { id1 = bussiness.mahoamd5(chinhanhid.ToString()), id2 = bussiness.mahoamd5(cmnd.Trim()), id3 = bussiness.mahoamd5(makhachhang.Trim().ToUpper()), id4 = bussiness.mahoamd5(tochuc.ToString()) });
                        // _bangKeService.KhachHang(bussiness.mahoamd5(chinhanhid.ToString()), bussiness.cmnd = bussiness.mahoamd5(cmnd), bussiness.mahoamd5(makhachhang.ToUpper()), tochuc);

                    }
                    else
                    {                            
                        ModelState.AddModelError("MaKhachHang", "Không tìm thấy dữ liệu!");
                        return View();
                    }
                }      
                
            }
            else
            {               
                ModelState.AddModelError("CaptchaCode", "Mã xác nhận không đúng!");
                return View();
            }           
            
        }
        [HttpGet]
        [AllowAnonymous]
        [Route("thongke")]
        public async Task<IActionResult> ThongKe()
        
        {
            //var a = _httpContextAccessor.HttpContext.;
            //IPHostEntry host = Dns.GetHostEntry("10.10.1.10");
            //int ip = 0;
            //string aa;
            //foreach (IPAddress address in host.AddressList)
            //{
            //    aa = a.ToString();
            //    ip++;
            //}
            DataContext _context = new DataContext();
            IEnumerable<ThongKeModel> thongke = await _context.ThongKe.Select(i =>  new ThongKeModel
            {
                Id= i.Id,
                Online= 1,
                TruyCap= i.TruyCap,
                XemTietKiem = i.XemTietKiem,
            }).Where(x=>x.Id==1).ToListAsync();

            return  View(thongke);           

        }
       
        //public async Task<IActionResult> ChiTiet(DataSourceLoadOptions loadOptions, int chinhanhid, string cmnd, string makhachhang, bool tochuc)
        //{
        //    //  string userInput = HttpContext.Request.Form["ChiNhanhID"];
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
        //    });
        //    return Json(await DataSourceLoader.LoadAsync(chitiettkckh, loadOptions));
        //}

        #region AJAX API
        [HttpGet]
        public async Task<IActionResult> Combobox(DataSourceLoadOptions loadOptions)
        {
            DataContext _context = new DataContext();
            var chinhanh = _context.ChiNhanh.Select(x => new {
                x.Id,
                x.ChiNhanhID,
                x.TenChiNhanh,
            });
            return Json(await DataSourceLoader.LoadAsync(chinhanh, loadOptions));
        }
        #endregion
    }
}
