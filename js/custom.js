/* Custome */

$(function () {
    'use strict';
    $('.info-list li').click(function(){
        $(this).addClass('selected').siblings('li').removeClass('selected');
        $('.info-content div').hide();
        $('.'+$(this).data('class')).fadeIn();
    });

   /* $('.nav #menu-acces').click(function(){
        $('.nav .nav-list').hide();
        $('.'+$(this).data('class')).slideToggle();
        /*$('.nav .nav-list').show();
    });*/

    $(".nav #menu-acces").click(function(){
         $(".nav ul").removeClass("hidden-sm");
        $(".nav .nav-list").toggle();
    });
});



// Loading Screen
$(window).on('load', function(){ 
   // document is loaded and DOM is ready
   $(".loading-overlay").fadeOut(2000, function(){
    $("body").css("overflow","auto");
    $(this).remove();
});
});

