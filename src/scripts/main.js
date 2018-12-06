$(document).ready(function () {
	ulselected();
	ulselected2();
	$('.owl-carousel').owlCarousel({
		items: 1,
		//autoplay: true,
		dots: false,
		nav: true,
		singleItem: true,
		loop: true
	});
});

function ulselected() {
	$('header .container .collapse ul li a').on('click', function () {
		$(this).parents('ul').find('a').removeClass('active')
		$(this).toggleClass('active')
	})
}
function ulselected2() {
	$('.home-filter .container ul li').on('click', function () {
		$(this).parents('.tab').find('li').removeClass('active')
		$(this).toggleClass('active')
		var el = $(this).attr('data-open')
		
		$(this).parents('.tab').find('.cont .item').removeClass('active')
		$(this).parents('.tab').find('.cont .item#'+el).addClass('active')
	})
}


