using System.Collections.Generic;
using Api.Models;

namespace Api.Store
{
    public interface IStore
    {
        bool Add(Customer customer);
        bool Delete(string customerName);
        IList<Customer> GetAll();
        Customer EditCustomer(string customerName, Customer customer);
    }
}
