$(document).ready(function (){
	$(".slider-d").slick({
		autoplay:false,
		slidesToShow:4,
		slidesToScroll:1,
		dots:false,
		infinite:false,
		draggable:false,
		prevArrow: "<button style='height: 30px; width: 30px; position: relative; float: left'><img src='./images/Slider_arrow_white_l.svg'></button>",
		nextArrow: "<button style='height: 30px; width: 30px; position: relative; bottom:50px; float: right'><img src='./images/Slider_arrow_white_r.svg'></button>",
	});
	$(".b2-carcass_block-items").slick({
		autoplay:false,
		slidesToShow:6,
		slidesToScroll:1,
		dots:false,
		dotsClass: 'dots-slider',
		infinite:false,
		draggable:false,
		prevArrow: "<div class='class-arrow class-arrow-l'><button><img src='./images/Slider_arrow-l.svg'></button></div>",
		nextArrow: "<div class='class-arrow class-arrow-r'><button><img src='./images/Slider_arrow-r.svg'></button></div>",
		responsive: [
			{
				breakpoint: 1535,
				settings: {
					slidesToShow:5,
					dots: true,

				}
			},
			{
				breakpoint: 1279,
				settings: {
					slidesToShow:3,
					dots: true
				}
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow:2,
					dots: true
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow:1,
					dots: true
				}
			}
		]
	});
	$(".b3-leaders-block").slick({
		autoplay:false,
		slidesToShow:2,
		slidesToScroll:1,
		dots:false,
		dotsClass: 'dots-slider',
		infinite:false,
		draggable:false,
		prevArrow: "<div class='class-arrow class-arrow-l'><button><img src='./images/Slider_arrow-l.svg'></button></div>",
		nextArrow: "<div class='class-arrow class-arrow-r'><button><img src='./images/Slider_arrow-r.svg'></button></div>",
		responsive: [
			{
				breakpoint: 1535,
				settings: {
					slidesToShow:1
				}
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow:1,
					arrows: false,
					dots: true
				}
			}
		]
	});
	$(".b2-video-items").slick({
		autoplay:false,
		slidesToShow:3,
		slidesToScroll:1,
		dots:false,
		dotsClass: 'dots-slider',
		infinite:false,
		draggable:false,
		prevArrow: "<div class='class-arrow class-arrow-l'><button><img src='./images/Slider_arrow-l.svg'></button></div>",
		nextArrow: "<div class='class-arrow class-arrow-r'><button><img src='./images/Slider_arrow-r.svg'></button></div>",
		responsive: [
			{
				breakpoint: 1535,
				settings: {
					slidesToShow:2,
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow:1,
					dots: true,
					arrows: false
				}
			}
		]
	});
	$(".b3-clients-block").slick({
		autoplay:false,
		slidesToShow:6,
		slidesToScroll:1,
		dots:false,
		dotsClass: 'dots-slider',
		infinite:false,
		draggable:false,
		prevArrow: "<div class='class-arrow class-arrow-l'><button><img src='./images/Slider_arrow-l.svg'></button></div>",
		nextArrow: "<div class='class-arrow class-arrow-r'><button><img src='./images/Slider_arrow-r.svg'></button></div>",
		responsive: [
			{
				breakpoint: 1535,
				settings: {
					slidesToShow:5
				}
			},
			{
				breakpoint: 1279,
				settings: {
					slidesToShow:4,
					arrows:false,
					dots:true
				}
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow:3,
					arrows:false,
					dots:true
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow:2,
					arrows:false,
					dots:true
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow:1,
					arrows:false,
					dots:true
				}
			},
		]
	});
	$(".b6-documentation-block").slick({
		autoplay:false,
		slidesToShow:4,
		slidesToScroll:1,
		dots:false,
		dotsClass: 'dots-slider',
		infinite:false,
		draggable:false,
		prevArrow: "<div class='class-arrow class-arrow-l'><button><img src='./images/Slider_arrow-l.svg'></button></div>",
		nextArrow: "<div class='class-arrow class-arrow-r'><button><img src='./images/Slider_arrow-r.svg'></button></div>",
		responsive: [
			{
				breakpoint: 1535,
				settings: {
					slidesToShow:3,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow:2,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow:1,
					arrows: false,
					dots: true
				}
			},
		]
	});
	$(".b4-material-block").slick({
		autoplay:false,
		slidesToShow:6,
		slidesToScroll:1,
		dots:false,
		dotsClass: 'dots-slider',
		infinite:false,
		draggable:false,
		prevArrow: "<div class='class-arrow class-arrow-l'><button><img src='./images/Slider_arrow-l.svg'></button></div>",
		nextArrow: "<div class='class-arrow class-arrow-r'><button><img src='./images/Slider_arrow-r.svg'></button></div>",
		responsive: [
			{
				breakpoint: 1535,
				settings: {
					slidesToShow:5,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 1279,
				settings: {
					slidesToShow:4,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow:3,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow:2,
					arrows: false,
					dots: true
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow:1,
					arrows: false,
					dots: true
				}
			}
		]
	});
	$(".b2-info-block-allimg").slick({
		autoplay:false,
		slidesToShow:3,
		slidesToScroll:1,
		dots:false,
		dotsClass: 'dots-slider',
		infinite:false,
		draggable:false,
		prevArrow: false,
		nextArrow: false,
		responsive: [
			{
				breakpoint: 575,
				settings: {
					slidesToShow:1,
					dots: true
				}
			}
		]
	});
	$(".b2-block_onenews-slider").slick({
		autoplay:false,
		slidesToShow:3,
		slidesToScroll:1,
		dots:false,
		dotsClass: 'dots-slider',
		infinite:false,
		draggable:false,
		prevArrow: "<div class='class-arrow class-arrow-l'><button><img src='./images/Slider_arrow-l.svg'></button></div>",
		nextArrow: "<div class='class-arrow class-arrow-r'><button><img src='./images/Slider_arrow-r.svg'></button></div>",
		responsive: [
			{
				breakpoint: 1439,
				settings: {
					dots: true,
					arrows: false
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow:1,
					dots: true,
					arrows: false
				}
			}
		]
	});
	$(".Modern-Slider").slick({
		autoplay:true,
		autoplaySpeed:10000,
		speed:600,
		slidesToShow:1,
		slidesToScroll:1,
		pauseOnFocus:false,
		pauseOnHover:false,
		dots:true,
		// fade:true,
		draggable:true,
		prevArrow:false,
		nextArrow:false,
	});
	$(".b9-vopros_items").slick({
		autoplay:false,
		speed:600,
		slidesToShow:1,
		slidesToScroll:1,
		pauseOnFocus:false,
		pauseOnHover:false,
		dots:false,
		infinite:false,
		draggable:false,
		swipe:false,
		prevArrow: false,
		nextArrow: false
	});
	$(".b13-payment_items").slick({
		autoplay:false,
		speed:600,
		slidesToShow:1,
		slidesToScroll:1,
		pauseOnFocus:false,
		pauseOnHover:false,
		dots:false,
		infinite:false,
		swipe:false,
		draggable:false,
		prevArrow: false,
		nextArrow: false
	});
	$(".tabs-class-1").slick({
		autoplay:false,
		slidesToShow:5,
		slidesToScroll:1,
		dots:false,
		infinite:false,
		draggable:false,
		prevArrow: "<button style='height: 30px; width: 30px; position: relative; float: left'><img src='./images/Slider_arrow_white_l.svg'></button>",
		nextArrow: "<button style='height: 30px; width: 30px; position: relative; bottom:50px; float: right'><img src='./images/Slider_arrow_white_r.svg'></button>",
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 697,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 405,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
	$(".tabs-class-2").slick({
		autoplay:false,
		slidesToShow:3,
		slidesToScroll:1,
		dots:false,
		infinite:false,
		draggable:false,
		prevArrow: "<button style='height: 30px; width: 30px; position: relative; float: left'><img src='./images/Slider_arrow_white_l.svg'></button>",
		nextArrow: "<button style='height: 30px; width: 30px; position: relative; bottom:50px; float: right'><img src='./images/Slider_arrow_white_r.svg'></button>",
		responsive: [
			{
				breakpoint: 662,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 490,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
	$(".tabs-class-3").slick({
		autoplay:false,
		slidesToShow:5,
		slidesToScroll:1,
		dots:false,
		infinite:false,
		draggable:false,
		prevArrow: "<button style='height: 30px; width: 30px; position: relative; float: left'><img src='./images/Slider_arrow_white_l.svg'></button>",
		nextArrow: "<button style='height: 30px; width: 30px; position: relative; bottom:50px; float: right'><img src='./images/Slider_arrow_white_r.svg'></button>",
		responsive: [
			{
				breakpoint: 1535,
				settings: {
					slidesToShow:4
				}
			},
			{
				breakpoint: 1279,
				settings: {
					slidesToShow:3
				}
			},
			{
				breakpoint: 1023,
				settings: {
					slidesToShow:2
				}
			},
			{
				breakpoint: 610,
				settings: {
					slidesToShow:1
				}
			},
		]
	});
	$(".tabs-class-4").slick({
		autoplay:false,
		slidesToShow:2,
		slidesToScroll:1,
		dots:false,
		infinite:false,
		draggable:false,
		prevArrow: "<button style='height: 30px; width: 30px; position: relative; float: left'><img src='./images/Slider_arrow_white_l.svg'></button>",
		nextArrow: "<button style='height: 30px; width: 30px; position: relative; bottom:50px; float: right'><img src='./images/Slider_arrow_white_r.svg'></button>",
		responsive: [
			{
				breakpoint: 490,
				settings: {
					slidesToShow:1
				}
			}
		]
	});
	$(".b2-info-img").slick({
		autoplay:false,
		speed:600,
		slidesToShow:1,
		slidesToScroll:1,
		pauseOnFocus:false,
		pauseOnHover:false,
		// dots:false,
		// infinite:false,
		swipe:false,
		// draggable:false,
		prevArrow: false,
		nextArrow: false,
		responsive: [
			{
				breakpoint: 9999,
				settings: "unslick"
			},
			{
				breakpoint: 767,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1
				}
			}
		]
	});
		$(".sections-interest-block-slider").slick({
			autoplay: false,
			rows: 2,
			slidesToShow: 4,
			slidesToScroll: 1,
			dots: false,
			dotsClass: 'dots-slider',
			infinite: true,
			draggable: true,
			prevArrow: false,
			nextArrow: false,
			responsive: [
				{
					breakpoint: 1535,
					settings: {
						slidesToShow: 3,
						dots: true
					}
				},
				{
					breakpoint: 1023,
					settings: {
						rows: 1,
						slidesToShow: 2,
						dots: true
					}
				},
				{
					breakpoint: 767,
					settings: {
						rows: 1,
						slidesToShow: 1,
						dots: true
					}
				}
			]
		});



	$(".b6-advantages-text-slider").slick({
		autoplay:true,
		slidesToShow:1,
		slidesToScroll:1,
		dots:false,
		dotsClass: 'dots-slider',
		infinite:true,
		draggable:true,
		prevArrow: "<button class='b6-advantages-text-slider-b-left'><img src='./images/Slider_arrow_white_l.svg'></button>",
		nextArrow: "<button class='b6-advantages-text-slider-b-right'><img src='./images/Slider_arrow_white_r.svg'></button>",
		responsive: [
			{
				breakpoint: 561,
				settings: {
					arrows: false,
					dots:true
				}
			}
		]
	});
	for (let i = 1; i<=8; i++){
		$('.tabs-wrapper-'+i+'').each(function() {

			let ths = $(this);
			ths.find('.tab-item-'+i+'').not(':first').hide();
			ths.find('.b2-carcass-tab-'+i+'').eq(0).addClass('active');
			$elSolutionsShow = $('.tabs-content-3 .tab-item-3 .b10-solutions-img:nth-child(n+5)').hide();
			let a=4;

			$('.button-ewe').click(function(){
				a += 4;
				$('.tabs-content-3 .tab-item-3 .b10-solutions-img:nth-child(-n+'+a+')').show();
				console.log(a);
			});
			ths.find('.tab-'+i+'').click(function() {
				$('.b2-info-block-allimg, .b6-documentation-block').slick("refresh");
				a=4;
				ths.find('.b2-carcass-tab-'+i+'').removeClass('active').eq($(this).index()).addClass('active');
				ths.find('.tab-item-'+i+'').hide().eq($(this).index()).fadeIn();
				$elSolutions = $('.tabs-content-3 .tab-item-3 .b10-solutions-img').length;
				$elSolutionsShow = $('.tabs-content-3 .tab-item-3 .b10-solutions-img:nth-child(n+5)').hide();
			});
		});
	}

	$('.button-next').click(function(){
		if ($('input[name="select"]').is(':checked')){
			if($('#option-7').is(':checked')){
				if ($(".val-input1").val()){
					$(".wrapper .option").removeClass("option-danger");
					$(".b9-vopros_items").slick('slickNext');
				}else{
					$(".wrapper .option-7").addClass("option-danger");
				}
			}else{
				$(".wrapper .option").removeClass("option-danger");
				$(".b9-vopros_items").slick('slickNext');
			}
		} else {
			$(".wrapper .option").addClass("option-danger");
		}
	});
	$('.button-prev').click(function(){
		$(".b9-vopros_items").slick('slickPrev');
	});
	$('.wrapper .option').click(function(){
			$(".wrapper .option").removeClass("option-danger");
	});




	$('.button-next-payment').click(function(){
		let l = 1;
		for (j=1; j<=6; j++){
			if (!$('input[name="input'+j+'"]').val()){
				$(".b13-payment_items .block-form .b13-payment_items-input:nth-child("+j+") input").addClass("option-danger");
			} else{
				l++;
			}
		}
		if (l-1 >= 6){
			$(".b13-payment_items").slick('slickNext');
		}
		// $(".b13-payment_items").slick('slickNext');
	});
	$('.button-prev-payment').click(function(){
		$(".b13-payment_items").slick('slickPrev');
	});
	$('.b13-payment_items .block-form .b13-payment_items-input').click(function(){
		$(".b13-payment_items .block-form .b13-payment_items-input input").removeClass("option-danger");
	});



	$(".b9-vopros_items").on('afterChange', function(event, slick, currentSlide, nextSlide){
		currentSlide+1;
		if(currentSlide <= 8){
			let number_slider_nav_index = (currentSlide +1)
			$(".b9-vopros-krugs-0 .krug-"+ (number_slider_nav_index-1) +"").removeClass("b9-vopros-krug-shadow");
			$(".b9-vopros-krugs-0 .krug-"+ (number_slider_nav_index+1) +"").removeClass("b9-vopros-krug-shadow");
			$(".b9-vopros-krugs-0 .krug-"+ number_slider_nav_index +"").addClass("b9-vopros-krug-shadow");
			$(".b9-vopros-krugs-0 .b9-vopros-polosa:nth-child("+((number_slider_nav_index-1)*2)+")").addClass("b9-vopros-polosa-orange");
		}
	});
		$(".b13-payment_items").on('afterChange', function(event, slick, currentSlide, nextSlide){
			currentSlide+1;
			if(currentSlide <= 8){
				let number_slider_nav_index = (currentSlide +1)
				$(".b13-payment .b13-payment_items-shag span").text(number_slider_nav_index);
				$(".b9-vopros-krugs-1 .krug-"+ (number_slider_nav_index-1) +"").removeClass("b9-vopros-krug-shadow");
				$(".b9-vopros-krugs-1 .krug-"+ (number_slider_nav_index+1) +"").removeClass("b9-vopros-krug-shadow");
				$(".b9-vopros-krugs-1 .krug-"+ number_slider_nav_index +"").addClass("b9-vopros-krug-shadow");
				$(".b9-vopros-krugs-1 .b9-vopros-polosa:nth-child("+((number_slider_nav_index-1)*2)+")").addClass("b9-vopros-polosa-orange");
			}
		});


	let acc = document.getElementsByClassName("accordion");
	let i;
	for (i = 0; i < acc.length; i++) {
		let j = i;
		acc[i].addEventListener("click", function() {
			this.classList.toggle("active");
			$(".b15-accordion-tranform"+ (j+1) +"").toggleClass('b15-accordion-tranform-svg');
			let panel = this.nextElementSibling;
			if (panel.style.display === "block") {
				panel.style.display = "none";
			} else {
				panel.style.display = "block";
			}
		});
	}
	$test = $('.tabs-content-3 .tab-item-3:nth-child(1) .b10-solutions-img').length;

	$colSolutions = $('.tabs-content-3 .tab-item-3').length;
	for (i = 1; i<=$colSolutions; i++){

	}
	$('.menu-icon-dropdown > ul > li:first-child .menu-icon-dropdown__item, .mobilemenu-items > ul > li:first-child, .menu-icon-dropdown__items, .menu-icon-dropdown__items2').hover(function(){
		$('.menu-icon-dropdown__items').addClass('menu-icon-dropdown__items2');
		$(".menu-icon-dropdown__items").removeClass(' menu-icon-dropdown__items');
	}, function(){
		$(".menu-icon-dropdown__items2").addClass('menu-icon-dropdown__items');
		$('.menu-icon-dropdown__items2').removeClass('menu-icon-dropdown__items2');
	})
	$('.second_menu-item-hover, .second_menu-block-dopmenu').hover(function(){
			if ($(window).width() <= '1540'){
				$('.second_menu-block').css('width', '1240px');
			}
			else {
				$('.second_menu-block').css('width', '1540px');
			}
		$(window).on('load resize',window);
		$('.second_menu-block-dopmenu').css('display', 'block');
		$('.second_menu-items .second_menu-item:nth-child(5) .second_menu-item-str').css('display', 'block');
		$('.second_menu-items .second_menu-item:nth-child(5) .second_menu-item-punkt').css('color', '#FC7603');
	}, function(){
		$('.second_menu-block').css('width', '439px');
		$('.second_menu-block-dopmenu').css('display', 'none');
		$('.second_menu-items .second_menu-item:nth-child(5) .second_menu-item-str').css('display', 'none');
		$('.second_menu-items .second_menu-item:nth-child(5) .second_menu-item-punkt').css('color', '#1D2F3C');
	})
	$('.menu-burger__header').click(function(){
		$('.menu-burger__header').toggleClass('open-menu');
		$('.header__nav').toggleClass('open-menu');
		$('body').toggleClass('overflow-hidden');
	});
	let LengthLi = $('ul.header__menu > li').length;
	for (let d = 1; d <= LengthLi; d++){
		$('ul.header__menu > li:nth-child('+d+') > .header__menu-items-click .header__menu-items-svg').click(function() {
			$('ul.header__menu li:nth-child('+d+') ul.header__menu-second_level').toggleClass('active-menu');
			$('ul.header__menu > li:nth-child('+d+') > .header__menu-items-click .header__menu-items-svg').toggleClass('active-svg');
			$('ul.header__menu > li:nth-child('+d+') ul.header__menu-second_level > li ul.header__menu-third_level').removeClass('active-menu');
			$('ul.header__menu > li:nth-child('+d+') ul.header__menu-second_level > li > .header__menu-items-click .header__menu-items-svg').removeClass('active-svg');
			$('ul.header__menu > li:nth-child('+d+')').toggleClass('active-box_shadow');
			$('ul.header__menu > li:nth-child('+d+') ul.header__menu-second_level > li').removeClass('active-box_shadow');
		});
		LengthL2 = $('ul.header__menu > li:nth-child('+d+') ul.header__menu-second_level > li').length;
		for (let a = 1; a <= LengthL2; a++){
			$('ul.header__menu > li:nth-child('+d+') ul.header__menu-second_level > li:nth-child('+a+') > .header__menu-items-click .header__menu-items-svg').click(function() {
				$('ul.header__menu > li:nth-child('+d+') ul.header__menu-second_level > li:nth-child('+a+') ul.header__menu-third_level').toggleClass('active-menu');
				$('ul.header__menu > li:nth-child('+d+') ul.header__menu-second_level > li:nth-child('+a+') > .header__menu-items-click .header__menu-items-svg').toggleClass('active-svg');
				$('ul.header__menu > li:nth-child('+d+') ul.header__menu-second_level > li:nth-child('+a+')').toggleClass('active-box_shadow');
			});
		}
	}
	$('.openModal').click(function() {
		$(".modal_zvonok").addClass('modal_zvonok-active');
	});
	$('.closeModal').click(function() {
		$(".modal_zvonok").removeClass('modal_zvonok-active');
	});
	$('#ClickAdvantages').click(function() {
		$(".b4-advantages-block .b4-advantages-block-item:nth-child(n+5)").toggleClass('active-advantages');
		if ($(".b4-advantages-block .b4-advantages-block-item:nth-child(n+5)").is(':visible')) {
			$("#ClickAdvantages button span").text('скрыть');
		} else {
			$("#ClickAdvantages button span").text('показать больше');
		}
	});

// готовый скролл
	let ele = $('.tabs-wrapper-5 .tabs-class-5');
	let scrolled, scroll = 100, speed = 200;
	$('#scroll-left').click(function() {
		scrolled = ele.scrollLeft() - scroll;
		$('#scroll-right').show();
		if (scrolled <= 0){
			$('#scroll-right').show();
			$('#scroll-left').hide();
		} else{
			$('#scroll-left').show();
		}
		ele.animate({
			scrollLeft:  scrolled
		}, speed);
	});
	$('#scroll-right').click(function() {
		scrolled = ele.scrollLeft() + scroll;
		// console.log(scrolled/scroll);
		// console.log((697 - ele.width())/scroll);

		$('#scroll-left').show();
		if (scrolled/scroll >= parseInt(($(window).width() - 64)/scroll)){
			$('#scroll-right').hide();
			$('#scroll-left').show();
		} else {
			$('#scroll-right').show();
		}
		ele.animate({
			scrollLeft:  scrolled
		}, speed);
	});
	$('#scroll-left, #scroll-right').bind({
		click: function(e) {
			e.preventDefault();
		}
	});
	if (ele.hasClass('flex')){
	$(window).on('load resize', function () {
		$(function(){
			if (ele.hasScrollBar() === false){
				$('#scroll-right, #scroll-left').hide()
			} else{
				if (ele.scrollLeft() === 0){
					$('#scroll-right').show();
					$('#scroll-left').hide();
				}
				else{
					$('#scroll-right, #scroll-left').show();
				}
			}
		});
		(function($) {
			$.fn.hasScrollBar = function() {
				return this.get(0).scrollWidth > this.width();
			}
		})(jQuery);

	});
	}
// готовый скролл конец


	let ele6 = $('.tabs-wrapper-6 .tabs-class-6');
	$('#scroll-left-6').click(function() {
		scrolled = ele6.scrollLeft() - scroll;
		$('#scroll-right-6').show();
		if (scrolled <= 0){
			$('#scroll-right-6').show();
			$('#scroll-left-6').hide();
		} else{
			$('#scroll-left-6').show();
		}
		ele6.animate({
			scrollLeft:  scrolled
		}, speed);
	});


	$('#scroll-right-6').click(function() {
		scrolled = ele6.scrollLeft() + scroll;
		$('#scroll-left-6').show();
		if (parseInt(scrolled/scroll) >= parseInt((ele6[0].scrollWidth + scroll - ele6.width())/scroll)){
			$('#scroll-right-6').hide();
			$('#scroll-left-6').show();
		} else {
			$('#scroll-right-6').show();
		}
		ele6.animate({
			scrollLeft:  scrolled
		}, speed);
	});
	$('#scroll-left-6, #scroll-right-6').bind({
		click: function(e) {
			e.preventDefault();
		}
	});
	if (ele6.hasClass('flex')){
		$(window).on('load resize', function () {
			$(function(){
				if (ele6.hasScrollBar() === false){
					$('#scroll-right-6, #scroll-left-6').hide()
				} else{
					if (ele6.scrollLeft() === 0){
						$('#scroll-right-6').show();
						$('#scroll-left-6').hide();
					}
					else{
						$('#scroll-right-6, #scroll-left-6').show();
					}
				}
			});
			(function($) {
				$.fn.hasScrollBar = function() {
					return this.get(0).scrollWidth > this.width();
				}
			})(jQuery);
		});
	}

	// фильтр проектов
	$colFilter = $('.b2-filter-block-items .b2-filter-block-item').length;
	for (let f = 1; f <= $colFilter; f++){
		$('.b2-filter-block-items .b2-filter-block-item:nth-child('+f+') .b2-filter-block-item-dan').click(function() {
			$('.b2-filter-block-items .b2-filter-block-item .b2-filter-block-item-dan').not($(this)).removeClass('active-str-filter');
			if ($('.b2-filter-block-items .b2-filter-block-item:nth-child('+f+') .b2-filter-block-item-ftr').is(':hidden')) {
				$('.b2-filter-block-items .b2-filter-block-item .b2-filter-block-item-ftr').hide(300);
			}
			//
			$(this).toggleClass('active-str-filter');
			$('.b2-filter-block-items .b2-filter-block-item:nth-child('+f+') .b2-filter-block-item-ftr').toggle(300);
		});
	}
	$('.openModal-filter').click(function() {
		$("#modal_windows-filter").show(300);
	});
	$('.closeModal-filter').click(function() {
		$("#modal_windows-filter").hide(300);
	});
	$("#polzunok_square").slider({
		animate: "slow",
		range: true,
		values: [ 10, 65 ],
		slide : function(event, ui) {
		$("#result-polzunok-ot").val(ui.values[ 0 ]+" м²");
		$("#result-polzunok-do").val(ui.values[ 1 ]+" м²");
	}
	});
	$( "#result-polzunok-ot" ).val($("#polzunok_square").slider("values", 0)+" м²");
	$( "#result-polzunok-do" ).val($("#polzunok_square").slider("values", 1)+" м²");
	$(".curr-year").text(  );
	$("#polzunok_year").slider({
		animate: "slow",
		range: true,
		values: [ 1995, (new Date).getFullYear() ],
		min: 1995,
		max: (new Date).getFullYear(),
		slide : function(event, ui) {
			$("#result-polzunok2-ot").val(ui.values[ 0 ]+" г.");
			$("#result-polzunok2-do").val(ui.values[ 1 ]+" г.");
		}
	});
	$( "#result-polzunok2-ot" ).val($("#polzunok_year").slider("values", 0)+" г.");
	$( "#result-polzunok2-do" ).val($("#polzunok_year").slider("values", 1)+" г.");
	$('#b2-filter-country .b2-filter-country-item').click(function() {
		$(this).toggleClass("b2-filter-country-active");
	});
})
