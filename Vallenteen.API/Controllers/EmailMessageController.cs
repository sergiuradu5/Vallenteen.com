using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using Vallenteen.API.Models;

namespace Vallenteen.API.Controllers
{
    [Route("api/message")]
    [ApiController]
    public class EmailMessageController : ControllerBase
    {
        private EmailAddress FromAndToEmailAddress;
        private IEmailService EmailService;

        public EmailMessageController(EmailAddress _fromAddress, 
            IEmailService _emailService)
        {
            FromAndToEmailAddress = _fromAddress;
            EmailService = _emailService;
        }

        [HttpPost]
        public IActionResult sendMessage(ContactFormModel model)
        {
            if (ModelState.IsValid)
            {
                EmailMessage msgToSend = new EmailMessage
                {
                    FromAddresses = new List<EmailAddress> { FromAndToEmailAddress },
                    ToAddresses = new List<EmailAddress> { FromAndToEmailAddress },
                    Content = $"Name: {model.Name}, " +
                        $"Email: {model.EmailAddress}, Message: \n\n{model.Message}",
                    Subject = $"[vallenteen.com] Message from {model.Name}"
                };

                EmailService.Send(msgToSend);
                return Ok();
            }
            else
            {
                return BadRequest("Message could not be sent");
            }
        }
    }
    
}