(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1500,
        dots: true,
        loop: true,
        items: 1
    });
    
})(jQuery);

$(document).on('change', '#select_num', function() {

    var $mensajeUno = $(
      '<h1>UNO</h1>'
    );
    var $mensajeDos = $(
      '<h1>DOS</h1>'
    );
    var $mensajeTres = $(
      '<h1>TRES</h1>'
    );
    var $mensajeCuatro = $(
      '<h1>CUATRO</h1>'
    );
    
    var seleccion = $(this).val();
    $('#mensaje').html('');
    switch (seleccion) {
      case '1':
        $('#mensaje').append($mensajeUno);
        break;
      case '2':
        $('#mensaje').append($mensajeDos);
        break;
      case '3':
        $('#mensaje').append($mensajeTres);
        break;
      case '4':
        $('#mensaje').append($mensajeCuatro);
        break;
    }
});