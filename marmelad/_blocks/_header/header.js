$(document).on('scroll', function(){
    if($(document).scrollTop() >= 700) {
        $('.header__fixed').addClass('visible')
    } else {
        $('.header__fixed').removeClass('visible')
    }
});

$(document).on('scroll', function(){
    if($(document).scrollTop() > $('.intro, .intro-in').innerHeight() / 2) {
        $('.header__menu').addClass('white')
    } else {
        $('.header__menu').removeClass('white')
    }
});
