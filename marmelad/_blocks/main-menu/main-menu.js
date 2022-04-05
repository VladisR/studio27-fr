$('.main-menu li, .header__menu li').each(function(){
    if($(this).children('ul').length) {
        $(this).addClass('has-child')
        // $(this).find('>a').append('<span class="m-tgl"><span class="svg-icon svg-icon--arr-d" aria-hidden="true"><svg class="svg-icon__link"><use xlink:href="#arr-d"></use></svg></span></span>')
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
