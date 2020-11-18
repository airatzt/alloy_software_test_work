using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Store;
using Microsoft.AspNetCore.Mvc;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReportController : ControllerBase
    {
        private readonly IStore _store;

        public ReportController(IStore store)
        {
            _store = store;
        }

        // GET: api/<ReportController>
        [HttpGet]
        public IActionResult Get()
        {
            var report = _store.GetAll().GroupBy(x => x.City).Select(c => new
            {
                City = c.First().City,
                Sum = c.Sum(x => x.Anmount)
            }
            ).ToList();
            return Ok(report);
        }
    }
}
