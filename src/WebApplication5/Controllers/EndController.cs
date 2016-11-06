using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNet.Mvc;

namespace WebApplication5.Controllers
{
    public class EndController : Controller
    {
        public IActionResult Gaga()
        {
            ViewData["Message"] = "Your application description page.";

            return View();
        }
    }
}
