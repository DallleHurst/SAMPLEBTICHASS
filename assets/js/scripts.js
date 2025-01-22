$(document).ready(function() {
    var headerHeight = $('header').outerHeight();

    $(window).scroll(function() {
        if ($(this).scrollTop() > headerHeight) {
            $('.site').addClass('scrolled');
        } else {
            $('.site').removeClass('scrolled');
        }
    });
});