using System;
using System.ComponentModel.DataAnnotations;

namespace ServerSide.Dtos
{
    public class UserForRegisterDto
    {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength(50, MinimumLength = 4, ErrorMessage = "You must specify password at least 4 characters.")]
        public string Password { get; set; }

        [Required]
        public string Gender { get; set; }

        [Required]
        public string KnownAs { get; set; }

        [Required]
        public DateTime DateOfBirth { get; set; }

        [Required]
        public string City { get; set; }

        [Required]
        public string Country { get; set; }

        public DateTime Created { get; set; }

        public DateTime LastActive { get; set; }

        public UserForRegisterDto() 
        {
            Created = DateTime.Now;
            LastActive = DateTime.Now;
        }
    }
}