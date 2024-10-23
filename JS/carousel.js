var carouselWidht = $('.carousel-inner'). scrollwidht;
var carWidht = $('.carousel-item').widht();

var scrollposition = 0;

$('.carousel-control-next').on('click', function(){
    scrollposition = scrollposition + carWidht
})