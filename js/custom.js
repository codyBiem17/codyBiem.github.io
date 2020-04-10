$(document).ready(function () {

    var offsetCatalogDiv = $('.catalog').offset().top;

    var stickyNavbars = function () {
        var scrollTop = $(window).scrollTop(); 

      
        if (scrollTop > offsetCatalogDiv) {
            // $('.white-div').removeClass('d-none');
            // $('#blue-div-nav').css({ display: "none" });
            $('.sticky-navbars').addClass('sticky-navbars-scroll');
            // $('.hide-and-show').css({ display: "block" }).addClass('sticky-nav');
        }
        else {
            // $('.white-div').addClass('d-none');
            $('.sticky-navbars').removeClass('sticky-navbars-scroll');
        }
    };

    stickyNavbars();
    $(window).scroll(function () {
        stickyNavbars();
    });
});
