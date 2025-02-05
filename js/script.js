$(document).ready(function () {
    // Add smooth scrolling to all links in navbar + footer link
    $(".navbar a, footer a[href='#home']").on('click', function (event) {
        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (900) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $(window).scroll(function () {
        var wScroll = $(this).scrollTop();

        // Jumbotron parallax effect
        $('.jumbotron img').css({
            'transform': 'translate(0px, ' + wScroll / 5 + '%)'
        });

        $('.jumbotron h2').css({
            'transform': 'translate(0px, ' + wScroll / 5 + '%)'
        });

        $('.jumbotron p').css({
            'transform': 'translate(0px, ' + wScroll / 3 + '%)'
        });

        // Navbar solid color on scroll
        if (wScroll > $('.jumbotron').height() - 100) {
            $('.navbar-fixed-top').addClass('scrolled');
        } else {
            $('.navbar-fixed-top').removeClass('scrolled');
        }

        // Portfolio - Showing images in a modal
        $('.portfolio-link').click(function(e){
            e.preventDefault();
            var imageSrc = $(this).data('src');
            $('#modalImage').attr('src', imageSrc);
            $('#portfolioModal').modal('show');
        });

        // About Section - Parallax (Add elements with class 'parallax' to the about section paragraphs)
        $('.about .parallax').css({
            'transform': 'translate(0px, ' + wScroll / 10 + '%)'
        });
    });
});