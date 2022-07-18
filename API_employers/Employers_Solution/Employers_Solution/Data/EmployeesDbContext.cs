using Employers_Solution.Models;
using Microsoft.EntityFrameworkCore;

namespace Employers_Solution.Data
{
    public class EmployeesDbContext : DbContext
    {
        public EmployeesDbContext(DbContextOptions options) : base(options)
        {

        }
        public DbSet<Employee> Employees { get; set; }
        
    }
}
