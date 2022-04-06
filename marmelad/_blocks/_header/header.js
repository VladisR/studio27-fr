$(document).on('scroll', function(){
    if($(document).scrollTop() >= 700) {
        $('.header__fixed').addClass('visible')
    } else {
        $('.header__fixed').removeClass('visible')
    }
});
