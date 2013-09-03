// Detect features with Modernizr

var showInfo = function() {
    var info = {
        width: viewportSize.getWidth(),
        cssTransitions: Modernizr.csstransitions,
        cssTransforms3d: Modernizr.csstransforms3d
    };

    var h = '<ul>';
    $.each(info, function(k, v) {
        h += '<li>' + k + ': ' + v + '</li>';
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
