$('.main-menu li').each(function(){
    if($(this).children('ul').length) {
        $(this).addClass('has-child')
        $(this).find('>a').append('<span class="m-tgl">')
    }
});

$('.m-tgl').on('click', function(evt){
    evt.preventDefault();
    $(this)
        .closest('li')
        .toggleClass('is-opened')
        .find('>ul')
        .stop()
        .slideToggle(200)
});
