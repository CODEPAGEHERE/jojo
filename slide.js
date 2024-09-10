$(document).ready(function() {
    $('.flexslider').flexslider({
        animation: "fade",
        slideshowSpeed: 5000,
        animationSpeed: 600,
        controlNav: true,
        directionNav: false,
        smoothHeight: true,
        start: function() {
            // Trigger animation on the first slide
            $('.flex-active-slide .desc').css('opacity', '1').css('transform', 'translateY(0)');
        },
        before: function() {
            // Reset animation before slide changes
            $('.desc').css('opacity', '0').css('transform', 'translateY(30px)');
        },
        after: function() {
            // Trigger animation after the slide has changed
            $('.flex-active-slide .desc').css('opacity', '1').css('transform', 'translateY(0)');
        }
    });
});
