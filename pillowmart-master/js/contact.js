// This file contains JavaScript code for handling contact form submissions.

$(document).ready(function() {
    // Validate the contact form
    $('#contactForm').validate({
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            email: {
                required: true,
                email: true
            },
            message: {
                required: true,
                minlength: 10
            }
        },
        messages: {
            name: {
                required: "Please enter your name",
                minlength: "Your name must be at least 2 characters long"
            },
            email: {
                required: "Please enter your email address",
                email: "Please enter a valid email address"
            },
            message: {
                required: "Please enter a message",
                minlength: "Your message must be at least 10 characters long"
            }
        },
        submitHandler: function(form) {
            // Submit the form via AJAX
            $.ajax({
                type: 'POST',
                url: $(form).attr('action'),
                data: $(form).serialize(),
                success: function(response) {
                    // Handle success response
                    $('#contactForm')[0].reset();
                    alert('Your message has been sent successfully!');
                },
                error: function() {
                    // Handle error response
                    alert('There was an error sending your message. Please try again later.');
                }
            });
        }
    });
});