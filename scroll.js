$(document).ready(function() {
    // Initialize Scrollspy
    $('body').scrollspy({ target: '#sidebar', offset: 70 });

    // Smooth scroll for nav links
    $('.nav-link').on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top - 70
            }, 800);
        }
    });
});
