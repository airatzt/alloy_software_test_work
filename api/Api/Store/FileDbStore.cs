using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Api.Models;
using LiteDB;
using Microsoft.Extensions.Configuration;

namespace Api.Store
{
    public class FileDbStore : IStore
    {
        private readonly string _dbFileName;

        public FileDbStore(IConfiguration configuration)
        {
            _dbFileName = configuration.GetSection("DbFileName").Value;
        }

        public bool Add(Customer customer)
        {
            using (var db = new LiteDatabase(_dbFileName))
            {
                var col = db.GetCollection<Customer>("customers");
                var existCustomer = col.FindOne(x=>x.Name==customer.Name);
                if (existCustomer == null)
                {
                    col.Insert(new BsonValue(customer.Name), customer);
                    return true;
                }
                return false;
            }
        }

        public bool Delete(string customerName)
        {
            using (var db = new LiteDatabase(_dbFileName))
            {
                var col = db.GetCollection<Customer>("customers");
                return col.Delete(customerName);
            }
        }

        public IList<Customer> GetAll()
        {
            using (var db = new LiteDatabase(_dbFileName))
            {
                var col = db.GetCollection<Customer>("customers");
                return col.FindAll().ToList();
            }
        }
    }
}
