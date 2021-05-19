$(document).ready(function(){

    $(".fancybox").fancybox({
        openEffect: "none",
        closeEffect: "none"
    });
    
    $(".zoom").hover(function(){
        $(this).addClass('transition');
    }, function(){
        $(this).removeClass('transition');
    });

    
    $('.fancyboxe').click(function () {
        $.fancybox([
            { href : '#fancybox-popup-form' }
        ]);
    });

});