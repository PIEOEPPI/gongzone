$(function(){ //헤더 메뉴 내리고 닫는 js
    $('.header_inner> ul> li').hover(function(){
        $(this).children('.sub').stop().slideToggle();
    });
});