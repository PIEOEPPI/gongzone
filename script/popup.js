$(function () {
    $('.news_inner li:nth-child(1) a').click(function () {
        $('.pop1').fadeIn(); //show 넣어도 됨
    });
    $('.news_inner li:nth-child(2) a').click(function () {
        $('.pop2').fadeIn(); //show 넣어도 됨
    });
    $('.news_inner li:nth-child(3) a').click(function () {
        $('.pop3').fadeIn(); //show 넣어도 됨
    });
    $('.popup a').click(function () {
        $('.popup').fadeOut(); //hide 넣어도 됨
    });
});