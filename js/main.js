(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('shadow-sm').css('top', '-100px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        loop: true,
        nav: false,
        dots: true,
        items: 1,
        dotsData: true,
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        center: true,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            768:{
                items:2
            }
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
})(jQuery);

function mostrarMensaje1() {
document.getElementById("myIframe").src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3350.013970910948!2d-68.84508448514488!3d-32.897798876746485!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x967e09117dc31799%3A0x9561ccf6b8d83459!2sMunicipalidad%20de%20Mendoza!5e0!3m2!1ses!2sar!4v1665846042323!5m2!1ses!2sar"
  
}
function mostrarMensaje2() {
    document.getElementById("myIframe").src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d26803.953225844692!2d-68.86355172618971!3d-32.88510084112971!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1shospitales%20%2C%20Capital%2C%20Mendoza!5e0!3m2!1ses!2sar!4v1665840630795!5m2!1ses!2sar"
    
    }
function mostrarMensaje3() {
        document.getElementById("myIframe").src = "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d18952.271894554662!2d-68.86070477763448!3d-32.88970684808923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1scajeros%20mendoza!5e0!3m2!1ses!2sar!4v1665844872569!5m2!1ses!2sar"
        
        }

