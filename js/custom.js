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

    

    function slideToggleIcons() {
        $('.program-details').click(function () {
            $(this).toggleClass('rotate-icon-plus');
            $('.rotate-icon-plus'). not(this).removeClass('rotate-icon-plus')
        })
    }
    slideToggleIcons()

    $('.hover-this-div').hover(function () {
    //   alert('ghfsd')
        $(this).prev('div').find('img').animate({ opacity: 1.0 }, 100);
    }, function () {
            $(this).prev('div').find('img').animate({ opacity: 0.3}, 100);
        
    })



});
