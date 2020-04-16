$(document).ready(function () {

    var offsetCatalogDiv = $('.catalog').offset().top;

    var stickyNavbars = function () {
        var scrollTop = $(window).scrollTop(); 

      
        if (scrollTop > offsetCatalogDiv) {
            $('.sticky-navbars').addClass('sticky-navbars-scroll');
        }
        else {
            $('.sticky-navbars').removeClass('sticky-navbars-scroll');
        }
    };

    stickyNavbars();
    $(window).scroll(function () {
        stickyNavbars();
    });

    
    // slidetoggle icons effect
    function slideToggleIcons() {
        $('.program-details').click(function () {
            $(this).toggleClass('rotate-icon-plus');
            $('.rotate-icon-plus'). not(this).removeClass('rotate-icon-plus')
        })
    }
    slideToggleIcons()

    // image hovering effect on large screen
    function hoverEffect() {
        $('.hover-this-div').hover(function () {
            //   alert('ghfsd')
            $(this).prev('div').find('img').animate({ opacity: 1.0 }, 100);
        }, function () {
            $(this).prev('div').find('img').animate({ opacity: 0.3 }, 100);

        })

        $('.course-list-images img').hover(function () {
            //   alert('ghfsd')
            $(this).animate({ opacity: 1.0 }, 100);
        }, function () {
            $(this).animate({ opacity: 0.3 }, 100);

        })
    }

    hoverEffect();
    



});
