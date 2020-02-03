/* ==============================================
	Preload
=============================================== */
$(window).load(function () { // makes sure the whole site is loaded
        'use strict';
        $('.pulse ').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(250).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('#intro_txt').addClass('animated fadeInDown');
    })
/* ==============================================
    Animation on scroll
=============================================== */
new WOW().init();
/* ==============================================
	Sticky nav
=============================================== */
$(window).scroll(function () {
    'use strict';
    if ($(this).scrollTop() > 1) {
        $('header').addClass("sticky");
    }
    else {
        $('header').removeClass("sticky");
    }
});
jQuery(function ($) {
    "use strict";

    function centerModal() {
        $(this).css('display', 'block');
        var $dialog = $(this).find(".modal-dialog")
            , offset = ($(window).height() - $dialog.height()) / 2
            , bottomMargin = parseInt($dialog.css('marginBottom'), 10);
        if (offset < bottomMargin) offset = bottomMargin;
        $dialog.css("margin-top", offset);
    }
    $('.modal').on('show.bs.modal', centerModal);
    $('.modal-popup .close-link').click(function (event) {
        event.preventDefault();
        $('.modal').modal('hide');
    });
    $(window).on("resize", function () {
        $('.modal:visible').each(centerModal);
    });
});
<!-- Search-->	
$(function () {
    'use strict';
    $('a[href="#search"]').on('click', function (event) {
        event.preventDefault();
        $('#search').addClass('open');
        $('body').addClass('noScroll');
        $('#search > form > input[type="search"]').focus();
    });
    $('#search, #search button.close').on('click keyup', function (event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
            $('body').removeClass('noScroll');
        }
    });
});
$(function () {
    'use strict';
    $('a[href="#modal2"]').on('click', function (event) {
        event.preventDefault();
        $('#modal2').addClass('open');
        $('body').addClass('noScroll');
        $('#modal2 > form > input[type="modal2"]').focus();
    });
    $('#modal2, #modal2 button.close').on('click keyup', function (event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
            $('body').removeClass('noScroll');
        }
    });
});
$(function () {
    'use strict';
    $('a[href="#modal3"]').on('click', function (event) {
        event.preventDefault();
        $('#modal3').addClass('open');
        $('body').addClass('noScroll');
        $('#modal3 > form > input[type="modal3"]').focus();
    });
    $('#modal3, #modal3 button.close').on('click keyup', function (event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
            $('body').removeClass('noScroll');
        }
    });
});
$(function () {
    'use strict';
    $('a[href="#modal4"]').on('click', function (event) {
        event.preventDefault();
        $('#modal4').addClass('open');
        $('body').addClass('noScroll');
        $('#modal4 > form > input[type="modal4"]').focus();
    });
    $('#modal4, #modal4 button.close').on('click keyup', function (event) {
        if (event.target == this || event.target.className == 'close' || event.keyCode == 27) {
            $(this).removeClass('open');
            $('body').removeClass('noScroll');
        }
    });
});
$(function () {
    'use strict';
    $('.video_pop').magnificPopup({
        type: 'iframe'
    }); /* video modal*/
    /* Gallery images modal*/
    $('.magnific-gallery').each(function () {
        $(this).magnificPopup({
            delegate: 'a'
            , type: 'image'
            , gallery: {
                enabled: true
            }
            , removalDelay: 500, //delay removal by X to allow out-animation
            callbacks: {
                beforeOpen: function () {
                    // just a hack that adds mfp-anim class to markup 
                    this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure mfp-with-anim');
                    this.st.mainClass = this.st.el.attr('data-effect');
                }
            }
            , closeOnContentClick: true
            , midClick: true // allow opening popup on middle mouse click. Always set it to true if you don't provide alternative source.
        });
    });
});
<!-- testimonial carousel -->	
$(document).ready(function () {
    'use strict';
    $('#quote-carousel').carousel({
        pause: true
        , interval: 6000
    });
});
/* ==============================================
	Common
=============================================== */
<!-- Tooltip -->	
$('.tooltip-1').tooltip({
    html: true
});
//accordion	
function toggleChevron(e) {
    'use strict';
    $(e.target).prev('.panel-heading').find("i.indicator").toggleClass('icon_plus_alt2 icon_minus_alt2');
}
$('#accordion').on('hidden.bs.collapse shown.bs.collapse', toggleChevron);