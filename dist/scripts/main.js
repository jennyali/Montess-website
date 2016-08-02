$("document").ready(function() {

var sideNav = $(".side-nav");
var navIcon = $(".icon-navicon");
var header = $(".header");
var textButton = $(".text-button");
var secondText = $(".welcome-text-secondary");
var navImageWrit = $('.nav-image-writing');



$('.header-image').hide();

function cycleImages(){
    var $active = $('.header-image .active');
    var $next = ($('.header-image .active').next().length > 0) ? $('.header-image .active').next() : $('.header-image img:first');
    $next.css('z-index',2);
        $active.fadeOut(1500,function(){
            $active.css('z-index',1).show().removeClass('active');
            $next.css('z-index',3).addClass('active');
        });
}

navImageWrit.on('click',function(){
    $(this).toggleClass('move-up');
    $('.icon-scale-spread-1').toggleClass('color-two');
    $('.icon-scale-reduce-3').toggleClass('color');
});

textButton.on('click', function(){
    secondText.toggleClass('appear');
    $('.content-nav').toggleClass('move-down');
});

navIcon.on('click', function(){
    sideNav.toggleClass('move');
});

$(window).load(function(){
    $('.header-image').fadeIn(1000);
    setInterval(cycleImages,7000);
})


});
