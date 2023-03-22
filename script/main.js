$(function(){
    $('header> ul> li').hover(function(){
        $(this).children('.sub').stop().slideToggle();
    });
});