$(document).ready(function(){
    $('.hamburger').click(function(){
        $(this).toggleClass('is-active');
        $('.m-menu').toggleClass('mm-wrapper_opening');
    });

    $('.slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        arrows: true,
        dots: true,
        appendArrows: $('.slider'),
        prevArrow: '<div class="prev"><svg width="34" height="64" viewBox="0 0 34 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M32 2L2 31.5315L32 61.0625" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></div>',
        nextArrow: '<div class="next"><svg width="34" height="64" viewBox="0 0 34 64" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 62L32 32.4685L2 2.9375" stroke="white" stroke-width="4" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></div>'
    });
});

