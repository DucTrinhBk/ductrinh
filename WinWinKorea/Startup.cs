using Microsoft.AspNetCore.Builder;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.HttpsPolicy;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using Microsoft.Extensions.Hosting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace WinWinKorea
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
            services.AddControllersWithViews();
        }

        // This method gets called by the runtime. Use this method to configure the HTTP request pipeline.
        public void Configure(IApplicationBuilder app, IWebHostEnvironment env)
        {
            if (env.IsDevelopment())
            {
                app.UseDeveloperExceptionPage();
            }
            else
            {
                app.UseExceptionHandler("/Home/Error");
                // The default HSTS value is 30 days. You may want to change this for production scenarios, see https://aka.ms/aspnetcore-hsts.
                app.UseHsts();
            }
            app.UseHttpsRedirection();
            app.UseStaticFiles();

            app.UseRouting();

            app.UseAuthorization();

            app.UseEndpoints(endpoints =>
            {
                endpoints.MapControllerRoute(
                    name: "default",
                    pattern: "{controller=Home}/{action=Index}/{id?}");
                endpoints.MapControllerRoute(
                    name: "Route1",
                    pattern: "danh-sach-truong-hoc",
                    defaults: new { controller = "Home", action = "ListSchool" });
                endpoints.MapControllerRoute(
                    name: "Route2",
                    pattern: "danh-sach-bai-giang",
                    defaults: new { controller = "Home", action = "ListLesson" });
                endpoints.MapControllerRoute(
                    name: "Route3",
                    pattern: "thong-tin-bai-giang/{id}",
                    defaults: new { controller = "Home", action = "LessonDetail" });
                endpoints.MapControllerRoute(
                    name: "Route4",
                    pattern: "thong-tin-truong-hoc/{id}",
                    defaults: new { controller = "Home", action = "SchoolDetail" });
                endpoints.MapControllerRoute(
                   name: "Route5",
                   pattern: "gioi-thieu",
                   defaults: new { controller = "Home", action = "About" });
                //endpoints.MapControllerRoute(
                //   name: "Route6",
                //   pattern: "tien-ich",
                //   defaults: new { controller = "Home", action = "Utilities" });
                //endpoints.MapControllerRoute(
                //   name: "Route7",
                //   pattern: "dich-vu",
                //   defaults: new { controller = "Home", action = "Service" });
                endpoints.MapControllerRoute(
                   name: "Route6",
                   pattern: "lien-he",
                   defaults: new { controller = "Home", action = "Contact" });
                endpoints.MapControllerRoute(
                   name: "Route7",
                   pattern: "chinh-sach-va-dieu-khoan",
                   defaults: new { controller = "Home", action = "Policy" });
                endpoints.MapControllerRoute(
                   name: "Route8",
                   pattern: "viec-lam",
                   defaults: new { controller = "Home", action = "Vieclam" });
                endpoints.MapControllerRoute(
                   name: "Route9",
                   pattern: "phong-tro",
                   defaults: new { controller = "Home", action = "Phongtro" });
                endpoints.MapControllerRoute(
                   name: "Route10",
                   pattern: "ket-ban",
                   defaults: new { controller = "Home", action = "Ketban" });
                endpoints.MapControllerRoute(
                   name: "Route11",
                   pattern: "dat-ve-may-bay",
                   defaults: new { controller = "Home", action = "DatVeMayBay" });
                endpoints.MapControllerRoute(
                   name: "Route12",
                   pattern: "chuyen-tien-quoc-te",
                   defaults: new { controller = "Home", action = "ChuyenTienQuocTe" });
                endpoints.MapControllerRoute(
                   name: "Route13",
                   pattern: "chuyen-phat-nhanh",
                   defaults: new { controller = "Home", action = "ChuyenPhatNhanh" });
                endpoints.MapControllerRoute(
                   name: "Route14",
                   pattern: "thuong-mai",
                   defaults: new { controller = "Home", action = "ThuongMai" });
                endpoints.MapControllerRoute(
                   name: "Route15",
                   pattern: "van-hoa",
                   defaults: new { controller = "Home", action = "VanHoa" });
            });
        }
    }
}
