using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Diagnostics;
using System.Linq;
using System.Threading.Tasks;
using WinWinKorea.Models;

namespace WinWinKorea.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;

        public HomeController(ILogger<HomeController> logger)
        {
            _logger = logger;
        }

        public IActionResult Index()
        {
            return View();
        }
        public IActionResult ListSchool()
        {
            return View();
        }
        public IActionResult SchoolDetail(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                return RedirectToAction("index");
            }
            ViewData["idTruong"] = id;
            return View();
        }
        public IActionResult ListLesson()
        {
            return View();
        }
        public IActionResult LessonDetail(string id)
        {
            if (string.IsNullOrEmpty(id))
            {
                return RedirectToAction("index");
            }
            ViewData["idLesson"] = id;
            return View();
        }
        public IActionResult About()
        {
            return View();
        }
        public IActionResult Utilities()
        {
            return View();
        }
        public IActionResult Service()
        {
            return View();
        }
        public IActionResult Contact()
        {
            return View();
        }
        public IActionResult Policy()
        {
            return View();
        }
        public IActionResult Vieclam()
        {
            return View();
        }
        public IActionResult Phongtro()
        {
            return View();
        }
        public IActionResult Ketban()
        {
            return View();
        }
        public IActionResult DatVeMayBay()
        {
            return View();
        }
        public IActionResult ChuyenTienQuocTe()
        {
            return View();
        }
        public IActionResult ChuyenPhatNhanh()
        {
            return View();
        }
        public IActionResult ThuongMai()
        {
            return View();
        }
        public IActionResult VanHoa()
        {
            return View();
        }
    }
}
