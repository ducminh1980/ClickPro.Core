using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading.Tasks;
using BotDetect.Web;
using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Localization;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Newtonsoft.Json.Serialization;
using TraCuu.Common;

namespace TraCuu
{
    public class Startup
    {
        public Startup(IConfiguration configuration)
        {
            Configuration = configuration;
        }

        public IConfiguration Configuration { get; }

        // This method gets called by the runtime. Use this method to add services to the container.
        public void ConfigureServices(IServiceCollection services)
        {
            services.AddHttpContextAccessor();
            services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
            services.AddMemoryCache(); // Adds a default in-memory 
                                       // implementation of 
                                       // IDistributedCache
            services.AddSession(options =>
            {
                options.IdleTimeout = TimeSpan.FromSeconds(120);
                options.Cookie.HttpOnly = true;
                options.Cookie.IsEssential = true;
            });
            // Add framework services.
            services.AddMvc();
            //services.AddScoped<IChiNhanhService, ChiNhanhService>();
            services.Configure<RequestLocalizationOptions>(options =>
            {
                var supportedUICultures = new[]
                {
                    new CultureInfo("vi-VN")        
                };

                var supportedCultures = new[]
                {
                    new CultureInfo("vi-VN")
                };
                options.DefaultRequestCulture = new RequestCulture(culture: "vi-VN", uiCulture: "vi-VN");
                options.SupportedCultures = supportedCultures;
                options.SupportedUICultures = supportedUICultures;
            });
            // Add Session services.
            
            services
                .AddMvc()
                .AddJsonOptions(options => options.SerializerSettings.ContractResolver = new DefaultContractResolver());
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IHostingEnvironment env)
        {
            
            if (env.IsDevelopment())
            {
                app.UseBrowserLink();
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
            }
            app.UseSession();
            app.UseRequestLocalization();
            // configure your application pipeline to use Captcha middleware
            // Important! UseCaptcha(...) must be called after the UseSession() call
            app.UseCaptcha(Configuration);
            app.UseStaticFiles();
           
            app.UseMvc(routes =>
            {
                routes.MapRoute(
                    name: "default",
                    template: "{controller=Home}/{action=Index}/{id?}");
            });
        }
    }
}
