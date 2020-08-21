using Microsoft.EntityFrameworkCore;
using Vallenteen.API.Models;

namespace Vallenteen.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options){
        }

        public DbSet<Value> Values {get; set;}
    }
}