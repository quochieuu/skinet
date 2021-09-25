namespace API.Errors
{
    public class ApiException : ApiResponse
    {
        public ApiException(int statusCode, string messsage = null, string details = null)
            : base(statusCode, messsage)
        {
            Details = details;
        }

        public string Details { get; set; }
    }
}
