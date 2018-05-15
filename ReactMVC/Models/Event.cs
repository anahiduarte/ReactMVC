using System;
using System.ComponentModel.DataAnnotations;

namespace ReactMVC.Models
{
    public class Event
    {
        [Key]
        public int eventID { get; set; }
        public string description { get; set; }
        public string program { get; set; }
        public DateTime datestart { get; set; }
        public DateTime dateends { get; set; }


    }
}