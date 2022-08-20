console.log("Your index.js file is loaded correctly!");

$(".index.html").ready(function(){
    console.log("The page loaded .index.html");
    $('.heroContent').css('display','none');
    $('.heroContent').slideDown(1500);
    $('.heroImage').css('display','none');
    $('.heroImage').fadeIn(1500);
});


$(".myWorkPortfolio").ready(function(){
    $('#imgAikikai').css('display','none');
    $('#textAikikai').css('display','none');
    $('#textEdu').css('display','none');
    $('#imgEdu').css('display','none');
    $('#imgWeBoard').css('display','none');
    $('#textWeBoard').css('display','none');
    $('.contact').css('display','none');

});

$(".arrow").on("click", function(){
    $("#imgAikikai").slideDown(800);
    $("#textAikikai").slideDown(800);
    $("#textEdu").slideDown(800);
    $("#imgEdu").slideDown(800);
    $("#imgWeBoard").slideDown(800);
    $("#textWeBoard").slideDown(800);
    $(".contact").slideDown(800);
});

$(".title").on("click", function(){
    $("#imgAikikai").slideDown(800);
    $("#textAikikai").slideDown(800);
    $("#textEdu").slideDown(800);
    $("#imgEdu").slideDown(800);
    $("#imgWeBoard").slideDown(800);
    $(".contact").slideDown(800);
});

$(function() {
    // Open Popup
    $('[popup-open]').on('click', function() {
        var popup_name = $(this).attr('popup-open');
 $('[popup-name="' + popup_name + '"]').fadeIn(300);
    });
 
    // Close Popup
    $('[popup-close]').on('click', function() {
 var popup_name = $(this).attr('popup-close');
 $('[popup-name="' + popup_name + '"]').fadeOut(300);
    });
 
    // Close Popup When Click Outside
    $('.popup').on('click', function() {
 var popup_name = $(this).find('[popup-close]').attr('popup-close');
 $('[popup-name="' + popup_name + '"]').fadeOut(300);
    }).children().click(function() {
 return false;
    });
 
});


