$(document).ready(function () {

    // var offsetBlueDiv = $('#blue-div-nav').offset().top;

    var stickyWhiteDiv = function () {
        var scrollTop = $(window).scrollTop(); 

      
        if (scrollTop) {
            // $('.white-div').removeClass('d-none');
            $('#blue-div-nav').css({ display: "none" });
            // // $('.white-div').addClass('sticky-nav');
            // $('.hide-and-show').css({ display: "block" }).addClass('sticky-nav');
        }
        else {
            // $('.white-div').addClass('d-none');
            $('#blue-div-nav').css({ display: "block" });
        }
    };

    stickyWhiteDiv();
    $(window).scroll(function () {
        stickyWhiteDiv();
    });
});
