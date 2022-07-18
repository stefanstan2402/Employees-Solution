namespace Employers_Solution.Models
{
    public class Employee
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Email { get; set; }
        public long Phone { get; set; }
        public DateTime HiringDate { get; set; }
        public long Salary { get; set; }
        public string Department { get; set; }

    }
}
