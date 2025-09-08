// This file includes scripts for handling email subscriptions.

$(document).ready(function() {
    $('#mc-embedded-subscribe-form').on('submit', function(e) {
        e.preventDefault();
        var email = $('#mce-EMAIL').val();
        if (email) {
            $.ajax({
                type: 'POST',
                url: 'https://your-mailchimp-url',
                data: $(this).serialize(),
                success: function(response) {
                    alert('Thank you for subscribing!');
                },
                error: function(error) {
                    alert('There was an error. Please try again.');
                }
            });
        } else {
            alert('Please enter a valid email address.');
        }
    });
});