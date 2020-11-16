using System.Collections.Concurrent;
using System.Collections.Generic;
using System.Linq;
using Api.Models;

namespace Api.Store
{
    public class CachStore: IStore
    {
        private ConcurrentDictionary<string, Customer> _cache = new ConcurrentDictionary<string, Customer>();

        public bool Add(Customer customer)
        {
            return _cache.TryAdd(customer.Name, customer);
        }

        public bool Delete(string customerName)
        {
            return _cache.TryRemove(customerName, out Customer customer);
        }

        public IList<Customer> GetAll()
        {
            return _cache.Values.ToList();
        }
    }
}
