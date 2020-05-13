using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TraCuu.Domain
{
    public class DataContext : DbContext
    {
        public virtual DbSet<ChiTietTKCKH> ChiTietTKCKH { get; set; } //line 2
        public virtual DbSet<ChiNhanh> ChiNhanh { get; set; } //line 2
        public virtual DbSet<ThongKe> ThongKe { get; set; } //line 2
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(@"Server=10.10.1.10;Database=TraCuuTietKiem;Integrated Security=False;User ID=tctk;Password=CEP@2020;");//line 3
          
        }
    }
}
