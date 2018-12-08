$(document).ready(function () {
	ulselected();
	ulselected2();
	$('.home-slider .owl-carousel').owlCarousel({
		items: 1,
		//autoplay: true,
		dots: false,
		nav: true,
		navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
	});
	$('.home-guest .owl-carousel').owlCarousel({
		items: 1,
		//autoplay: true,
		dots: true,
		nav: false,
	});
	$('.home-client .owl-carousel').owlCarousel({
		responsive: {
			0: {
				items: 1,
				dots: true,
			},
			480: {
				items: 3,
				dots: true,
			},
			768: {
				items: 4,
				nav: true,
				dots: false,
				navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			},
			1024: {
				items: 6,
				dots: false,
				nav: true,
				navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>'],
			},

		}


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
		$(this).parents('.tab').find('.cont .item#' + el).addClass('active')
	})
}