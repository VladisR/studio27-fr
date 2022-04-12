$('.location__close').on('click', function(){
    $(this).closest('.location').removeClass('is-opened')
    $('.locations').removeClass('is-opened')
});
