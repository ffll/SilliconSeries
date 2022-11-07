$(function () {
    $(".episode").slice(0, 3).show();
    $("body").on('click touchstart', '.load-more', function (e) {
        e.preventDefault();
        $(".episode:hidden").slice(0, 3).slideDown();
        if ($(".episode:hidden").length == 0) {
            $("load").css('visibility', 'hidden');
        }
        $('html,body').animate({
            scrollTop: $(this).offset().top
        }, 1000);
    });
});