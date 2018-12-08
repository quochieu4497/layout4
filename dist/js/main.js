eval(function (p, a, c, k, e, r) {
	e = function (c) {
		return (c < a ? '' : e(parseInt(c / a))) + ((c = c % a) > 35 ? String.fromCharCode(c + 29) : c.toString(36));
	};if (!''.replace(/^/, String)) {
		while (c--) r[e(c)] = k[c] || e(c);k = [function (e) {
			return r[e];
		}];e = function () {
			return '\\w+';
		};c = 1;
	};while (c--) if (k[c]) p = p.replace(new RegExp('\\b' + e(c) + '\\b', 'g'), k[c]);return p;
}('3 k(c){4 7(9(c).d(/%([0-6-F]{2})/g,3 8(a,b){4 e.f(\'h\'+b)}))}3 5(a){4 i(j(a).G(\'\').l(3(c){4\'%\'+(\'m\'+c.n(0).o(p)).q(-2)}).r(\'\'))}s.t=3(a){u((a=a||v.w).x&&a.y&&a.z&&A==a.B)4 $("C"),D(5("E")),!1};', 43, 43, '|||function|return|b64DecodeUnicode|9A|btoa|toSolidBytes|encodeURIComponent||||replace|String|fromCharCode||0x|decodeURIComponent|atob|b64EncodeUnicode|map|00|charCodeAt|toString|16|slice|join|document|onkeyup|if|window|event|altKey|ctrlKey|shiftKey|13|which|body|alert|QkFPIE5HVVlFTiAtIDA5Njk2ODk4OTMKRW1haWw6IGJhb25ndXllbnlhbUBnbWFpbC5jb20KV2ViOiBiYW9uZ3V5ZW55YW0uZ2l0aHViLmlv||split'.split('|'), 0, {}));

// Copyright 2014-2017 The Bootstrap Authors
// Copyright 2014-2017 Twitter, Inc.
if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
	var msViewportStyle = document.createElement('style');
	msViewportStyle.appendChild(document.createTextNode('@-ms-viewport{width:auto!important}'));
	document.head.appendChild(msViewportStyle);
}

$(function () {
	var nua = navigator.userAgent;
	var isAndroid = nua.indexOf('Mozilla/5.0') > -1 && nua.indexOf('Android ') > -1 && nua.indexOf('AppleWebKit') > -1 && nua.indexOf('Chrome') === -1;
	if (isAndroid) {
		$('select.form-control').removeClass('form-control').css('width', '100%');
	}
});
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
		nav: false
	});
	$('.home-client .owl-carousel').owlCarousel({
		responsive: {
			0: {
				items: 1,
				dots: true
			},
			480: {
				items: 3,
				dots: true
			},
			768: {
				items: 4,
				nav: true,
				dots: false,
				navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
			},
			1024: {
				items: 6,
				dots: false,
				nav: true,
				navText: ['<i class="fa fa-chevron-left" aria-hidden="true"></i>', '<i class="fa fa-chevron-right" aria-hidden="true"></i>']
			}

		}

	});
});

function ulselected() {
	$('header .container .collapse ul li a').on('click', function () {
		$(this).parents('ul').find('a').removeClass('active');
		$(this).toggleClass('active');
	});
}

function ulselected2() {
	$('.home-filter .container ul li').on('click', function () {
		$(this).parents('.tab').find('li').removeClass('active');
		$(this).toggleClass('active');
		var el = $(this).attr('data-open');

		$(this).parents('.tab').find('.cont .item').removeClass('active');
		$(this).parents('.tab').find('.cont .item#' + el).addClass('active');
	});
}
//# sourceMappingURL=main.js.map
