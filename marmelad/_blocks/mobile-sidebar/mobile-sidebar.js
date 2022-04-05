$('.js-menu').on('click', function(){
    $('.mobile-sidebar').toggleClass('opened')

    if($('.mobile-sidebar').hasClass('opened')) {
        disableHtmlScroll();
    } else {
        enableHtmlScroll();
    }

});

function disableHtmlScroll() {
    if (/iPod|iPad|iPhone/i.test(navigator.userAgent)) {
        $('body').addClass('overflow-hidden');
    } else {
        $('body').removeClass('overflow-hidden');
        $(document.documentElement).addClass('overflow-hidden');
    }
}

function enableHtmlScroll() {
    $('body').removeClass('overflow-hidden');
    $(document.documentElement).removeClass('overflow-hidden');
}


$('.mobile-sidebar').on('click tap', function (event) {
    if ($(event.target).closest('.mobile-sidebar__container').length) return;
    $('.mobile-sidebar').removeClass('opened')
    enableHtmlScroll();
});
