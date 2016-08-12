$("document").ready(function() {

var sideNav = $(".side-nav");
var navIcon = $(".icon-navicon");
var header = $(".header");
var textButton = $(".text-button");
var secondText = $(".welcome-text-secondary");
var navImageWrit = $('.nav-image-writing');
var slideContain = $('.slider-container');
var slide = $('.slide');
var overlay = $('.gallery-overlay');
var overlayContain = $('.slider-container-overlay');

overlay.hide();

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
    $(this).find('.icon-scale-spread-1').toggleClass('color-two');
    $(this).find('.icon-scale-reduce-3').toggleClass('color');
});

textButton.on('click', function(){
    secondText.toggleClass('appear');
    $('.content-nav').toggleClass('move-down');
});

navIcon.on('click', function(){
    sideNav.toggleClass('move');
});

$(window).load(function(){
    $('.header-image').fadeIn(200);
    setInterval(cycleImages,7000);
})

slideContain.on('mouseenter', function(){
    slide.css('opacity','1');

    slide.on('mouseenter', function(){
        $(this).css('opacity','0.5');
    });

    slide.on('mouseleave', function(){
        $(this).css('opacity','1');
    });
});



slideContain.on('mouseleave', function(){
    slide.css('opacity','1');

});

slide.on('click', function(){
    
    slide.css('opacity','1');
    overlay.toggle();

    var thisSlide = $(this).attr('src');

    overlayContain.append("<img src='" + thisSlide + "' class='slide-grow'>");
});

overlay.on('click', function(){
    overlayContain.empty();
    $(this).hide();
})

});
