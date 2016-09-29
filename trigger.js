$(window).scroll(function () {
    $(".animated").each(function(){
        if ($(window).scrollTop() + $(window).height() > $(this).offset().top) {
           $(this).addClass($(this).data("animation"));
        } else {
            $(this).removeClass($(this).data("animation"));
        }
    });
});
