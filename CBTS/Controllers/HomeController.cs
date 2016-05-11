#region Copyright Syncfusion Inc. 2001 - 2013
// Copyright Syncfusion Inc. 2001 - 2013. All rights reserved.
// Use of this code is subject to the terms of our license.
// A copy of the current license can be obtained at any time by e-mailing
// licensing@syncfusion.com. Any infringement will be prosecuted under
// applicable laws. 
#endregion
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using CBTS.Infrastructure;
using CBTS.Models;

namespace CBTS.Controllers
{
    public class groups
    {
        public string text { get; set; }
        public string parentId { get; set; }
        public int id { get; set; }
        public int parent { get; set; }
    }
    public class Countries
    {
        public string text { get; set; }
        public string category { get; set; }
        public int value { get; set; }
        public string parentId { get; set; }
        public string sprite { get; set; }
        public string country { get; set; }
        public int id { get; set; }
        public int parent { get; set; }
    }


    public class PagesController : Controller
    {

        public ActionResult CompModels(bool? dev)
        {
            ViewBag.Message = "CompModels Description...";
            ViewBag.Location = "Competency Models by Service";
            ViewBag.Dev = dev ?? false;

            return View();
        }

    }
   


    public class HomeController : Controller
    {
<<<<<<< .mine
=======
        public ActionResult VRCPosition(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Competency Based Training";
            ViewBag.Dev = dev ?? false;
            return View();
        }
        public ActionResult Sitemap(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Competency Based Training";
            ViewBag.Dev = dev ?? false;
            return View();
        }
>>>>>>> .r746

<<<<<<< .mine
        public ActionResult ProjectStatus(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Competency Based Training";
            ViewBag.Dev = dev ?? false;
            return View();
        }

        public ActionResult BriefingToolsandTips(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Competency Based Training";
            ViewBag.Dev = dev ?? false;
            return View();
        }


        public ActionResult Glossary(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Competency Based Training";
            ViewBag.Dev = dev ?? false;
            return View();
        }

=======
        public ActionResult ProjectStatus(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Competency Based Training";
            ViewBag.Dev = dev ?? false;
            return View();
        }

        public ActionResult TrainingRoadmap(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Competency Based Training";
            ViewBag.Dev = dev ?? false;
            return View();
        }

        public ActionResult BriefingTools(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Competency Based Training";
            ViewBag.Dev = dev ?? false;
            return View();
        }


        public ActionResult Glossary(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Competency Based Training";
            ViewBag.Dev = dev ?? false;
            return View();
        }

>>>>>>> .r746
        public ActionResult Placeholder(bool? dev)
        {
            ViewBag.Message = "This is content placeholder.";
            ViewBag.Dev = dev ?? false;
            return View();
        }

        public ActionResult Employee(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Competency Based Training";
            ViewBag.Dev = dev ?? false;
            return View();
        }

        public ActionResult TrainingManager(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Competency Based Training";
            ViewBag.Dev = dev ?? false;
            return View();
        }

        public ActionResult FLSupervisor(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Competency Based Training";
            ViewBag.Dev = dev ?? false;
            return View();
        }

        public ActionResult Index(bool? dev)
        {
            ViewBag.Message = "Competency Based Training";
            ViewBag.Location = "Competency Based Training";
            ViewBag.Dev = dev ?? false;
            return View();
        }
        public ActionResult AddpProgram(bool? dev)
        {
            ViewBag.Message = "ADDP Program Description...";
            ViewBag.Location = "ADDP Program";
            ViewBag.Dev = dev ?? false;

            return View();
        }
        public ActionResult Calendar(bool? dev)
        {
            ViewBag.Message = "Calendar Description...";
            ViewBag.Location = "Calendar";
            ViewBag.Dev = dev ?? false;

            return View();
        }
        public ActionResult Faqs(bool? dev)
        {
            ViewBag.Message = "FAQS Description...";
            ViewBag.Location = "FAQS";
            ViewBag.Dev = dev ?? false;

            return View();
        }

   
           
       

        public ActionResult Smt(bool? dev)
        {
            ViewBag.Message = "SMT Description...";
            ViewBag.Location = "SMT";
            ViewBag.Dev = dev ?? false;

            return View();
        }
        public ActionResult Nssst(bool? dev)
        {
            ViewBag.Message = "NSSST Description...";
            ViewBag.Location = "NSSST";
            ViewBag.Dev = dev ?? false;

            return View();
        }

        public ActionResult Elcp(bool? dev)
        {
            ViewBag.Message = "ELCP Description...";
            ViewBag.Location = "ELCP Program (ELCP)";
            ViewBag.Dev = dev ?? false;

            return View();
        }

        public ActionResult LeadProgram(bool? dev)
        {
            ViewBag.Message = "LEAD Program Description...";
            ViewBag.Location = "LEAD Program";
            ViewBag.Dev = dev ?? false;

            return View();
        }
        public ActionResult Pmf(bool? dev)
        {
            ViewBag.Message = "PMF Description...";
            ViewBag.Location = "PMF Program";
            ViewBag.Dev = dev ?? false;

            return View();
        }
        public ActionResult SesCdp(bool? dev)
        {
            ViewBag.Message = "SESCDP Description...";
            ViewBag.Location = "SESCDP";
            ViewBag.Dev = dev ?? false;

            return View();
        }
        public ActionResult Elp(bool? dev)
        {
            ViewBag.Message = "ELP Description...";
            ViewBag.Location = "ELP";
            ViewBag.Dev = dev ?? false;

            return View();
        }
        public ActionResult Leap(bool? dev)
        {
            ViewBag.Message = "LEAP Description...";
            ViewBag.Location = "LEAP Program";
            ViewBag.Dev = dev ?? false;

            return View();
        }

        public ActionResult StaffAcademy(bool? dev)
        {
            ViewBag.Message = "Academy Staff Description...";
            ViewBag.Location = "Academy Staff";
            ViewBag.Dev = dev ?? false;

            return View();
        }



        public ActionResult StaffWashingtonDC(bool? dev)
        {
            ViewBag.Message = "Washington DC Staff Description...";
            ViewBag.Location = "Washington DC Staff";
            ViewBag.Dev = dev ?? false;

            return View();
        }




        [AcceptVerbs(HttpVerbs.Get)]
        public ActionResult DownloadFile(bool? dev, string filename)
        {
            ViewBag.Dev = dev ?? false;
            return new Utils.DownloadResult { VirtualPath = "~/Assets/Documents/" + filename, FileDownloadName = filename };
        }





    }
}
