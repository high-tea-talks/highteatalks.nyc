$(document).ready(function() {
	/* Scroll event handler */
    $(window).bind('scroll',function(e){
    	parallaxScroll();
    });
});

/* Scroll the background layers */
function parallaxScroll(){
	var scrolled = $(window).scrollTop();

	$('#parallax-bg1').css('top',(0+(scrolled*.1))+'px');
	$('#parallax-bg2').css('top',(0-(scrolled*.001))+'px');
	$('#parallax-bg3').css('top',(0+(scrolled*.1))+'px');
}

