using System;
using System.Collections.Generic;
using System.Linq;
using Api.Models;
using LiteDB;
using Microsoft.Extensions.Configuration;

namespace Api.Store
{
    public class FileDbStore : IStore, IDisposable
    {
        private LiteDatabase db;

        public FileDbStore(IConfiguration configuration)
        {
            db = new LiteDatabase(configuration.GetSection("DbFileName").Value);
        }

        public bool Add(Customer customer)
        {
            var col = db.GetCollection<Customer>("customers");
            var existCustomer = col.FindOne(x => x.Name == customer.Name);
            if (existCustomer == null)
            {
                col.Insert(new BsonValue(customer.Name), customer);
                return true;
            }
            return false;
        }

        public bool Delete(string customerName)
        {
            var col = db.GetCollection<Customer>("customers");
            return col.Delete(customerName);
        }

        public void Dispose()
        {
            db.Dispose();
        }

        public Customer EditCustomer(string customerName, Customer customer)
        {
            var col = db.GetCollection<Customer>("customers");
            var existCustomer = col.FindOne(x => x.Name == customerName);
            if (existCustomer != null)
            {
                col.Update(new BsonValue(customerName), customer);
                return existCustomer;
            }
            
            return null;
        }

        public IList<Customer> GetAll()
        {
            var col = db.GetCollection<Customer>("customers");
            return col.FindAll().ToList();
        }
    }
}
