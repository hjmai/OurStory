// $(document).ready(function(){
//     $('.fadeIn').fadeIn(2000);
// });

$('.next').on('click', function(){
    $('.current').addClass('fadeOutLeft');
    setTimeout(function(){
        $('.current').removeClass('fadeIn');
        $('.current').removeClass('fadeOutLeft');
        $('.current').removeClass('current');
    }, 3000)
})
$('.back').on('click', function(){
    $('.current').addClass('fadeInRight');
});
$('.carousel').carousel();