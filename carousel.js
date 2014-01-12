$(function () {
    screenWrapper = $('#carousel-screenwrapper');
    screens = $('#carousel-screenwrapper div');
    buttonsContainer = $('#carousel-buttons');
    
    // Setup
    // Add buttons and handlers
    for (var i = 0; i < screens.length; i++) {
        var newButton = $('<li></li>')
        
        newButton.addClass('carousel-button')
            .appendTo(buttonsContainer)
            .click(function (event) {
                var buttonIndex = buttonsContainer.children().index(event.target);
                screenWrapper.animate({left: -(buttonIndex * 400)}, 500);
            });
            
        if (i === 0) {
            newButton.addClass('active');
        }
    }
});
