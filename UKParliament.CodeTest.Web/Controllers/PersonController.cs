using Microsoft.AspNetCore.Mvc;
using UKParliament.CodeTest.Web.ViewModels;

namespace UKParliament.CodeTest.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PersonController : ControllerBase
    {
        private readonly ILogger<PersonController> _logger;

        public PersonController(ILogger<PersonController> logger)
        {
            _logger = logger;
        }

        [Route("{id:int}")]
        [HttpGet]
        public ActionResult<PersonViewModel> GetById(int id)
        {
            var person1 = new PersonViewModel()
            {
                Id = 1,
                Name = "Max Fakemen",
                Email = "max@email.com",
                Address = "123 fake street",
                DateOfBirth = new DateTime(1991, 01, 05),
                PhoneNumber = 1234567890
            };

            var person2 = new PersonViewModel()
            {
                Id = 2,
                Name = "Alex Fakemen",
                Email = "Alex@email.com",
                Address = "456 fake street",
                DateOfBirth = new DateTime(1994, 01, 05),
                PhoneNumber = 0987654321
            };

            var data = new PersonViewModel[] { person1, person2 };
            return Ok(data);
        }
    }
}