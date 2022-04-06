function formatState(state) {
    if (!state.id) {
          return state.text;
    }

    var baseUrl = "files";
    var $state = $('<span class="it-wr"><span class="it-icon"><img src="' + baseUrl + '/' + state.element.getAttribute('img-name').toLowerCase() + '.png" /></span>' + state.text + '</span>');
    return $state;
}

$('.filter .js-select-brand').select2({
    minimumResultsForSearch: -1,
    templateSelection: formatState,
    templateResult: formatState,
});

$('.filter .js-select').select2({
    minimumResultsForSearch: -1,
});

$('.js-select-brand').on('change', function(){
    $('.js-select-model').removeAttr('disabled')
});

$('.js-select-model').on('change', function(){
    $('.js-select-modification').removeAttr('disabled')
});
