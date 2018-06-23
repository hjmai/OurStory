$(document).ready(function(){
    $('.next').on('click', function(){
        $('.back').removeClass('hidden');
        $('.hereGoes').empty();
    })
    $('.back').on('click', function(){
        if($('.active').data('hide') == 'yes'){
            $('.back').addClass('hidden');
        }
    });
});
$('.carousel').carousel();