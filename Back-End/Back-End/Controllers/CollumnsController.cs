using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Back_End.Model;

namespace Back_End.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CollumnsController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CollumnsController(AppDbContext context)
        {
            _context = context;
        }

        // GET: api/Collumns
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Collumn>>> GetCollumn()
        {
            return await _context.Collumn.ToListAsync();
        }

        // GET: api/Collumns/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Collumn>> GetCollumn(int id)
        {
            var collumn = await _context.Collumn.FindAsync(id);

            if (collumn == null)
            {
                return NotFound();
            }

            return collumn;
        }

        // PUT: api/Collumns/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCollumn(int id, Collumn collumn)
        {
            if (id != collumn.CollumnId)
            {
                return BadRequest();
            }

            _context.Entry(collumn).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!CollumnExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/Collumns
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPost]
        public async Task<ActionResult<Collumn>> PostCollumn(Collumn collumn)
        {
            _context.Collumn.Add(collumn);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetCollumn", new { id = collumn.CollumnId }, collumn);
        }

        // DELETE: api/Collumns/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Collumn>> DeleteCollumn(int id)
        {
            var collumn = await _context.Collumn.FindAsync(id);
            if (collumn == null)
            {
                return NotFound();
            }

            _context.Collumn.Remove(collumn);
            await _context.SaveChangesAsync();

            return collumn;
        }

        private bool CollumnExists(int id)
        {
            return _context.Collumn.Any(e => e.CollumnId == id);
        }
    }
}
