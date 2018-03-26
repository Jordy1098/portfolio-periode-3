$(document).ready(function(){
    $("a").on('click', function() {
        //hash verwijst naar de href
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top
            }, 800);
    });
});