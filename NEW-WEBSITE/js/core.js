
jQuery(document).ready(function($) {

$('#mobile-nav').html($('.main-nav').html());
    $('#nav-trigger span').click(function(){
        if ($('#mobile-nav ul').hasClass('expanded')) {
            $('#mobile-nav ul.expanded').removeClass('expanded').slideUp(250);
            $(this).removeClass('open');
        } else {
            $('#mobile-nav ul').addClass('expanded').slideDown(250);
            $(this).addClass('open');
        }
    });
	$('.banner').each(function(){
        var $this = $(this);
        $this.unslider({
            speed : 300,
            delay : 3000,
            complete : function () {},
            keys : false,
            dots : true,
            fluid : true
        }).find('.unslider-arrow').click(function(event){
            event.preventDefault();
            if ($(this).hasClass('next')) {
                $this.data('unslider').next();
            } else {
                $this.data('unslider').prev();
            }
        });
    });
});
