/*
 * spriteScroller
 *
 * (c) M.Pokrandt <marcel.pokrandt@csmp.de>
 */


$(document).ready(function() {
	$(window).scroll(scrolled);
});


function scrolled(event) {
	var st = $(window).scrollTop();
	$("#scroller1").css("left", st/2);
}