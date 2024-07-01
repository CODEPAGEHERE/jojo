

    $(document).ready(function(){
        $('body').scrollspy({ target: '#sidebar', offset: 70 });

        $('.nav-link').on('click', function(event) {
            if (this.hash !== "") {
                event.preventDefault();
                var hash = this.hash;
                $('html, body').animate({
                    scrollTop: $(hash).offset().top - 70
                }, 800, function(){
                    window.location.hash = hash - 70;
                });
            }
        });
    });
