
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Filters;
using Microsoft.AspNetCore.Routing;
using TraCuu.Common;


namespace TraCuu.Controllers
{
    public  class BaseController : Controller
    {
       
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {

            var session = HttpContext.Session.GetString(CommonConstants.USER_SESSION);
            if (session == null)
            {
                filterContext.Result = new RedirectToRouteResult(new
                    RouteValueDictionary(new { controller = "Home", action = "Index" }));
            }
            base.OnActionExecuting(filterContext);
        }
    }
}