var showWidthInfo = function() {
    var width = viewportSize.getWidth();
    $('.info').html('Width: ' + width + 'px');
};

$(document).ready(function() {
    showWidthInfo();
});

$(window).resize(function() {
    showWidthInfo();
});
