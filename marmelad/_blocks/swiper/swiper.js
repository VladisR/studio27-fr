$('.swiper-parent').each(function () {
    $(this).find('.swiper-scrollbar').appendTo($(this));
    if($(this).closest('.list-block').find('.has-arrows').length) {
      $(this).closest('.list-block').find('.has-arrows').append($(this).find('.swiper-button-wrapper'))
    } else {
      $(this).find('.swiper-button').appendTo($(this));
    }
    // swiper-button-wrapper
});
