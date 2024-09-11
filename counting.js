$(document).ready(function() {
    $('.js-counter').each(function() {
        var $this = $(this),
            countTo = $this.attr('data-to');

        $({ countNum: $this.text() }).animate({
            countNum: countTo
        },
        {
            duration: parseInt($this.attr('data-speed')),
            easing: 'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
            }
        });
    });
});
