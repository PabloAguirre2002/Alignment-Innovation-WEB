using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.RazorPages;

namespace Alignment_Innovation_WEB.Pages
{
    public class Home : PageModel
    {
        private readonly ILogger<Home> _logger;

        public Home(ILogger<Home> logger)
        {
            _logger = logger;
        }   

        public void OnGet()
        {

        }
    }
}
