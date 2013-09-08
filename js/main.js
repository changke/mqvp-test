// Detect features with Modernizr

var showInfo = function() {
    var htmlClass = $('html').attr('class');
    var fts = $.trim(htmlClass).split(' ').join(' / ');

    var info = {
        Width: viewportSize.getWidth(),
        Features: fts
    };

    var h = '<ul>';
    $.each(info, function(k, v) {
        h += '<li><b>' + k + '</b>: ' + v + '</li>';
    });
    h += '</ul>';

    $('.info').html(h);
};

$(document).ready(function() {
    showInfo();

    $(window).resize(function() {
        showInfo();
    });
});
