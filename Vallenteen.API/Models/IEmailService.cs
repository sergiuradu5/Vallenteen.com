namespace Vallenteen.API.Models
{
    public interface IEmailService
    {
         void Send(EmailMessage message);
    }
}