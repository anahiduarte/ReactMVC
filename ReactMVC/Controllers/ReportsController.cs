using ReactMVC.Models;
using System.Linq;
using System.Web.Mvc;

namespace ReactMVC.Controllers
{
    public class ReportsController : Controller
    {

        ApplicationDbContext db = new ApplicationDbContext();
        // GET: Reports
        public ActionResult Index()
        {
            return View();
        }


        public JsonResult GetEvents()
        {
            db.Configuration.ProxyCreationEnabled = false;
            var events = db.Events.ToList();
            return new JsonResult { Data = events, JsonRequestBehavior = JsonRequestBehavior.AllowGet };
        }




    }
}