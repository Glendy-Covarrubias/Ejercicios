namespace core_net.ModelBD
{
    public class Project
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public string? Description { get; set; }
        public bool Status { get; set; }
    }
}
