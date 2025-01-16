using Microsoft.EntityFrameworkCore;

namespace core_net.ModelBD
{
    public class ProjectsContext : DbContext
    {
        public ProjectsContext(DbContextOptions<ProjectsContext> options)
        : base(options)
        {
        }

        public DbSet<Project> Projects { get; set; }
    }
}
