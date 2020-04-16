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
            // if ($('.accordion-divs').is(':hidden')) {
            // if ($('.accordion-divs').is(':hidden')) {
            $(this).toggleClass('rotate-icon-plus');
            $('.rotate-icon-plus'). not(this).removeClass('rotate-icon-plus')
                // console.log('hjbhgrgiu')
                // if ($(this).next('.accordion-divs').is(':hidden')) {
                    
                    // if ($('.accordion-divs').is('.collapse:not(.show)')) {
                    //     $('.program-details').toggleClass('rotate-icon-plus')
                    // }
                // }
                // else {
                //     $(this).toggleClass('rotate-icon-plus')
                // }    
            // }
            // else {
            //     console.log('accordion-divs');
            //     $('.accordion-divs').removeClass('rotate-icon-plus')
                
            // }   


            // if ($('.accordion-divs').is('.collapse:not(.show)')) {
            //     $(this).toggleClass('rotate-icon-plus')
            // }

            // if ($('.accordion-divs').is('.collapse:not(.show)')) {
            //         $('.program-details').toggleClass('rotate-icon-plus')
            //     }
                // $('.program-details').toggleClass('rotate-icon-plus')
            

            // if (!$('.program-details').is(':focus')) {
            //     $('.program-details').toggleClass('rotate-icon-plus')
            // }
            // else {
            //         $(this).toggleClass('rotate-icon-plus')
            // }
                // if (!$('.program-details').is(':focus')) {
                //     $('.program-details').toggleClass('rotate-icon-plus')
                // }
                
            // }
            // else {
                // $(this).removeClass('rotate-icon-plus');
                // $(this).addClass('rotate-icon-minus');
            // }
            // if ($('.accordion-divs').is(':visible')) {
            //     $('.program-details').toggleClass('rotate-icon-minus');
            // }

            
            // else {
                
            // }

            

            // if ($('.accordion-divs').is(':visible')) {
            //     $('.program-details').toggleClass('rotate-icon-plus')
            // }
            // else {
            //     $('.program-details').toggleClass('rotate-icon-plus');
            // }
            // }

            // else  {
            //     $(this).children('i.fa-minus-circle').toggleClass('rotate-icon-minus');
            //     $(this).children('i.fa-plus-circle').show();
            //     // $('i.fa-minus').hide();
            //     // });
            // }
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
