$(function() {

	const myModal = new HystModal({
	    linkAttributeName: "data-hystmodal",
	    // настройки (не обязательно), см. API
	});


	

	Share = {
	vkontakte: function(purl, ptitle, pimg, text) {
		url  = 'http://vkontakte.ru/share.php?';
		url += 'url='          + encodeURIComponent(purl);
		url += '&title='       + encodeURIComponent(ptitle);
		url += '&description=' + encodeURIComponent(text);
		url += '&image='       + encodeURIComponent(pimg);
		url += '&noparse=true';
		Share.popup(url);
	},

	twitter: function(purl, ptitle) {
		url  = 'http://twitter.com/share?';
		url += 'text='      + encodeURIComponent(ptitle);
		url += '&url='      + encodeURIComponent(purl);
		url += '&counturl=' + encodeURIComponent(purl);
		Share.popup(url);
	},

	mailru: function(purl, ptitle, pimg, text) {
		url  = 'http://connect.mail.ru/share?';
		url += 'url='          + encodeURIComponent(purl);
		url += '&title='       + encodeURIComponent(ptitle);
		url += '&description=' + encodeURIComponent(text);
		url += '&imageurl='    + encodeURIComponent(pimg);
		Share.popup(url)
	},

	popup: function(url) {
		window.open(url,'','toolbar=0,status=0,width=626,height=436');
	}
};





	$(".item").magnificPopup({
		type : 'image',
		gallery:{
			enabled: true
		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});

	/* Fixed Header */
	let header = $("#header");
	let intro = $("#intro");
	let introH = intro.innerHeight();
	let scrollPos = $(window).scrollTop();
	let nav = $("#nav");
	let navToggle = $("#navToggle");

	checkScroll(scrollPos, introH);

	$(window).on("scroll resize", function(){
		introH = intro.innerHeight();
		scrollPos = $(this).scrollTop();

		checkScroll(scrollPos, introH);
	});

	function checkScroll(scrollPos, introH) {
		if( scrollPos >= introH-100 ) {
			header.addClass("fixed");
		} else {
			header.removeClass("fixed");
		}

	}


	/* Smooth scroll */
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		let elementID = $(this).data('scroll');
		let elementOffset = $(elementID).offset().top;

		nav.removeClass("show");



		$("html, body").animate({
			scrollTop: elementOffset - 40
		},550)


	});




	/* Nav Toggle */
	navToggle.on("click", function(event) {

		event.preventDefault();

		nav.toggleClass("show");


	});


	


 
	$('#logo').click(function(event) {

	event.preventDefault();
 
	$('body,html').animate({scrollTop:0},800);
 
	});

	$('.open-popup').click(function(e) {
	    e.preventDefault();
	    $('.popup-bg').fadeIn(800);
	    $('html').addClass('no-scroll');
	});

	$('.close-popup').click(function() {
	    $('.popup-bg').fadeOut(800);
	    $('html').removeClass('no-scroll');
	});

});





