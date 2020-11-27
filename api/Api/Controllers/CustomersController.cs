using System.Collections.Generic;
using Api.Models;
using Api.Store;
using Microsoft.AspNetCore.Mvc;

namespace Api.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomersController : ControllerBase
    {
        private readonly IStore _store;

        public CustomersController(IStore store)
        {
            _store = store;
        }

        // GET: api/<CustomersController>
        [HttpGet]
        public IEnumerable<Customer> Get()
        {
            return _store.GetAll();
        }

        // POST api/<CustomersController>
        [HttpPost]
        public IActionResult Post([FromBody] Customer customer)
        {
            if (_store.Add(customer))
            {
                return Ok();
            }

            return BadRequest();
        }

        // DELETE api/<CustomersController>/5
        [HttpDelete("{customerName}")]
        public IActionResult Delete(string customerName)
        {
            if (_store.Delete(customerName))
            {
                return Ok();
            }

            return BadRequest();
        }

        [HttpPatch("{customerName}")]
        public Customer Patch(string customerName, [FromBody] Customer customer)
        {
            return _store.EditCustomer(customerName, customer);
        }
    }
}
