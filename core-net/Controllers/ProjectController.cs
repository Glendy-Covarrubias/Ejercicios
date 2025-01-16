using core_net.ModelBD;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace core_net.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController(ProjectsContext context) : ControllerBase
    {
        private readonly ProjectsContext _context = context;

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Project>>> Get()
        {
            return await _context.Projects.ToListAsync();
        }

        [HttpPost]
        public async Task<ActionResult<Project>> Post(Project project)
        {
            _context.Projects.Add(project);
            await _context.SaveChangesAsync();
            return CreatedAtAction(nameof(GetById), new { id = project.Id }, project);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Project>> GetById(int id)
        {
            var project = await _context.Projects.FindAsync(id);
            if (project == null)
            {
                return NotFound();
            }
            return project;
        }
        private bool ProjectExists(int id)
        {
            return _context.Projects.Any(e => e.Id == id);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Put(int id, Project updatedProject)
        {
            if (id != updatedProject.Id)
            {
                return BadRequest("El ID del proyecto no coincide.");
            }

            var existingProject = await _context.Projects.FindAsync(id);
            if (existingProject == null)
            {
                return NotFound();
            }

            existingProject.Name = updatedProject.Name;
            existingProject.Description = updatedProject.Description;
            existingProject.Status = updatedProject.Status;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                _ = !ProjectExists(id) ? NotFound() : throw new Exception();
            }

            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var project = await _context.Projects.FindAsync(id);
            if (project == null)
            {
                return NotFound();
            }

            _context.Projects.Remove(project);
            await _context.SaveChangesAsync();
            return NoContent();
        }

    }
}
