register_namespace('ui.popup');


ui.popup.show = function(title, content) {
    ui.popup.set_title(title);
    ui.popup.set_content(content)
    $('.popup, #popup-overlay').show();
};


ui.popup.set_title = function(title) {
    $('.popup .popup__title div').text(title);
};

ui.popup.set_content = function(content) {
    $('.popup .popup__content').html(content||'');
};


ui.popup.hide = function() {
    $('.popup, #popup-overlay').hide();
};


$(document).ready(function(){
    $('#popup-overlay, .popup__close, .popup__actions__close').live('click', function(){
        ui.popup.hide();
    });

});