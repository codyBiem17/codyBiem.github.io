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
            if ($(this).children('i.fa-plus-circle').is(':visible')) {
                $(this).children('i.fa-plus-circle').slideToggle();
                    // if ($('i:not(.fa-plus)').is(':visible') == false) {
                $(this).children('i.fa-minus-circle').show()
                    // }
                // });
            }

            else  {
                $(this).children('i.fa-minus-circle').slideToggle();
                $(this).children('i.fa-plus-circle').show();
                // $('i.fa-minus').hide();
                // });
            }
        })
    }
    slideToggleIcons()

  

    // $('a.program-details').click(function () {
    //     var children = $(this).children();
    //     if (children.hasClass('fa-plus')) {
    //         $('.fa-plus').slideToggle(function () {
    //             $('.fa-minus').show()
    //         });
    //     }
    //     else if (children.hasClass('fa-minus')) {
    //         $('.fa-minus').slideToggle(function () {
    //             $('.fa-plus').show();
    //             $('.fa-minus').hide();
    //         });
    //     }  
    // })


});
