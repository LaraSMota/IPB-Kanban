using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using IpbKanbanProject.Models;

namespace IpbKanbanProject.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ColumnsController : ControllerBase
    {
        private readonly Context _context;

        public ColumnsController(Context context)
        {
            _context = context;
        }

        // GET: api/Columns
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Column>>> GetColumns()
        {
            return await _context.Columns.ToListAsync();
        }

        // GET: api/Columns/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Column>> GetColumn(int id)
        {
            var column = await _context.Columns.FindAsync(id);

            if (column == null)
            {
                return NotFound();
            }

            return column;
        }

        // PUT: api/Columns/5
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutColumn(int id, Column column)
        {
            if (id != column.Id)
            {
                return BadRequest();
            }

            _context.Entry(column).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ColumnExists(id))
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

        // POST: api/Columns
        // To protect from overposting attacks, please enable the specific properties you want to bind to, for
        // more details see https://aka.ms/RazorPagesCRUD.
        [HttpPost]
        public async Task<ActionResult<Column>> PostColumn(Column column)
        {
            _context.Columns.Add(column);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetColumn", new { id = column.Id }, column);
        }

        // DELETE: api/Columns/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Column>> DeleteColumn(int id)
        {
            var column = await _context.Columns.FindAsync(id);
            if (column == null)
            {
                return NotFound();
            }

            _context.Columns.Remove(column);
            await _context.SaveChangesAsync();

            return column;
        }

        private bool ColumnExists(int id)
        {
            return _context.Columns.Any(e => e.Id == id);
        }
    }
}
