// smooth-scroll.js
$(document).ready(function(){
    // Плавное перелистывание по якорям
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();

            // Хэш (якорь) ссылки
            var hash = this.hash;

            // Плавное перелистывание
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});
