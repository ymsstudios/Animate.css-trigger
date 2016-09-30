/*!
 * Animate.css viewport trigger
 * Version - 1.0.0
 * Licensed under the MIT license - http://opensource.org/licenses/MIT
 *
 * Copyright (c) 2016 Martin Schwartz
 */

$(window).scroll(function () {
    $(".animated").each(function(){
        if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
           $(this).addClass($(this).data("animation"));
        } else {
            $(this).removeClass($(this).data("animation"));
        }
    });
});
