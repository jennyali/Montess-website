$("document").ready(function() {

var sideNav = $(".side-nav");
var navIcon = $(".icon-navicon");
var header = $(".header");
var textButton = $(".text-button");
var secondText = $(".welcome-text-secondary");


sideNav.hide();

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

textButton.on('click', function(){
    secondText.toggle();
});

navIcon.on('click', function(){
    sideNav.toggle(200);
});

$(window).load(function(){
    $('.header-image').fadeIn(1000);
    setInterval(cycleImages,7000);
})


});
