#pragma checksum "T:\DucMinh\MyOneDrive\Project\ClickPro.Core\ClickPro.Core\TraCuu\Views\Home\ThongKe.cshtml" "{ff1816ec-aa5e-4d10-87f7-6f4963833460}" "b481950741cded2504f303ed37bf6c37f6cca418"
// <auto-generated/>
#pragma warning disable 1591
[assembly: global::Microsoft.AspNetCore.Razor.Hosting.RazorCompiledItemAttribute(typeof(AspNetCore.Views_Home_ThongKe), @"mvc.1.0.view", @"/Views/Home/ThongKe.cshtml")]
[assembly:global::Microsoft.AspNetCore.Mvc.Razor.Compilation.RazorViewAttribute(@"/Views/Home/ThongKe.cshtml", typeof(AspNetCore.Views_Home_ThongKe))]
namespace AspNetCore
{
    #line hidden
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Threading.Tasks;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.AspNetCore.Mvc.Rendering;
    using Microsoft.AspNetCore.Mvc.ViewFeatures;
#line 1 "T:\DucMinh\MyOneDrive\Project\ClickPro.Core\ClickPro.Core\TraCuu\Views\_ViewImports.cshtml"
using TraCuu;

#line default
#line hidden
#line 4 "T:\DucMinh\MyOneDrive\Project\ClickPro.Core\ClickPro.Core\TraCuu\Views\_ViewImports.cshtml"
using DevExtreme.AspNet.Mvc;

#line default
#line hidden
#line 1 "T:\DucMinh\MyOneDrive\Project\ClickPro.Core\ClickPro.Core\TraCuu\Views\Home\ThongKe.cshtml"
using TraCuu.Models;

#line default
#line hidden
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"b481950741cded2504f303ed37bf6c37f6cca418", @"/Views/Home/ThongKe.cshtml")]
    [global::Microsoft.AspNetCore.Razor.Hosting.RazorSourceChecksumAttribute(@"SHA1", @"470c9aaf7ed5ef7ec399b25bb2bb2a0dd2867d15", @"/Views/_ViewImports.cshtml")]
    public class Views_Home_ThongKe : global::Microsoft.AspNetCore.Mvc.Razor.RazorPage<IEnumerable<ThongKeModel>>
    {
        #pragma warning disable 1998
        public async override global::System.Threading.Tasks.Task ExecuteAsync()
        {
#line 3 "T:\DucMinh\MyOneDrive\Project\ClickPro.Core\ClickPro.Core\TraCuu\Views\Home\ThongKe.cshtml"
  
    ViewData["Title"] = "ThongKe";

#line default
#line hidden
            BeginContext(99, 211, true);
            WriteLiteral("<style>\r\n    .thongke {\r\n        padding-top: 20px;\r\n        color: blue;\r\n    }\r\n</style>\r\n<div class=\"container thongke\">\r\n    <div class=\"row\"><h2>THỐNG KÊ SỐ LƯỢT TRUY CẬP</h2></div>\r\n    <div class=\"row\">\r\n");
            EndContext();
            BeginContext(374, 325, true);
            WriteLiteral(@"        <br />

        <table class=""table"">
            <thead>
                <tr>
                    <th>Đang online</th>
                    <th>Lượt truy cập</th>
                    <th>Lượt tra cứu TGTK</th>
                    <th></th>

                </tr>
            </thead>
            <tbody>
");
            EndContext();
#line 29 "T:\DucMinh\MyOneDrive\Project\ClickPro.Core\ClickPro.Core\TraCuu\Views\Home\ThongKe.cshtml"
                  
                    foreach (var item in Model)
                    {

#line default
#line hidden
            BeginContext(791, 62, true);
            WriteLiteral("                        <tr>\r\n                            <td>");
            EndContext();
            BeginContext(854, 29, false);
#line 33 "T:\DucMinh\MyOneDrive\Project\ClickPro.Core\ClickPro.Core\TraCuu\Views\Home\ThongKe.cshtml"
                           Write(item.Online.ToString("#,###"));

#line default
#line hidden
            EndContext();
            BeginContext(883, 39, true);
            WriteLiteral("</td>\r\n                            <td>");
            EndContext();
            BeginContext(923, 30, false);
#line 34 "T:\DucMinh\MyOneDrive\Project\ClickPro.Core\ClickPro.Core\TraCuu\Views\Home\ThongKe.cshtml"
                           Write(item.TruyCap.ToString("#,###"));

#line default
#line hidden
            EndContext();
            BeginContext(953, 39, true);
            WriteLiteral("</td>\r\n                            <td>");
            EndContext();
            BeginContext(993, 34, false);
#line 35 "T:\DucMinh\MyOneDrive\Project\ClickPro.Core\ClickPro.Core\TraCuu\Views\Home\ThongKe.cshtml"
                           Write(item.XemTietKiem.ToString("#,###"));

#line default
#line hidden
            EndContext();
            BeginContext(1027, 38, true);
            WriteLiteral("</td>\r\n                        </tr>\r\n");
            EndContext();
#line 37 "T:\DucMinh\MyOneDrive\Project\ClickPro.Core\ClickPro.Core\TraCuu\Views\Home\ThongKe.cshtml"
                    }
                

#line default
#line hidden
            BeginContext(1107, 64, true);
            WriteLiteral("            </tbody>\r\n        </table>\r\n    </div>\r\n\r\n</div>\r\n\r\n");
            EndContext();
        }
        #pragma warning restore 1998
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.ViewFeatures.IModelExpressionProvider ModelExpressionProvider { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IUrlHelper Url { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.IViewComponentHelper Component { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IJsonHelper Json { get; private set; }
        [global::Microsoft.AspNetCore.Mvc.Razor.Internal.RazorInjectAttribute]
        public global::Microsoft.AspNetCore.Mvc.Rendering.IHtmlHelper<IEnumerable<ThongKeModel>> Html { get; private set; }
    }
}
#pragma warning restore 1591
