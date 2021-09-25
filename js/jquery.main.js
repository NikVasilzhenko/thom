$(document).ready(function(){
	if($(window).width() > 767){
		var index5SlideCount = 2,
			index5SlideIndex = 1,
			index7SlideCount = 2,
			index7SlideIndex = 1,
			index9SlideCount = 2,
			index9SlideIndex = 1,
			index11SlideCount = 2,
			index11SlideIndex = 1,
			index13SlideCount = 2,
			index13SlideIndex = 1,
			sliding = false;	
		$('#fullpage').fullpage({
			sectionSelector: '.vertical-scrolling',
			slideSelector: '.horizontal-scrolling',
			navigation: false,
			slidesNavigation: false,
			controlArrows: false,
			css: true,
			anchors: ['sec-1', 'sec-2', 'sec-3', 'sec-4', 'sec-5','sec-6','sec-7','sec-8','sec-9','sec-10','sec-11','sec-12','sec-13','sec-14','sec-15','sec-16','sec-17','sec-18'],
			scrollingSpeed: 1000,
			scrollOverflow: false,
			loopTop: false,
			loopBottom: false,
			loopHorizontal: false,
			onLeave : function (index, nextIndex, direction) {
				if (index == 5){
					if (!sliding) {					
						if (direction == 'down' && index5SlideIndex < index5SlideCount) {
							sliding = true;
							$.fn.fullpage.moveSlideRight();
							return false;
						} else if (direction == 'up' && index5SlideIndex > 1) {
							sliding = true;
							$.fn.fullpage.moveSlideLeft();
							return false;
						}
					} else if (sliding) {
						return false;
					}
				}
				if (index == 7){
					if (!sliding) {					
						if (direction == 'down' && index7SlideIndex < index7SlideCount) {
							sliding = true;
							$.fn.fullpage.moveSlideRight();
							return false;
						} else if (direction == 'up' && index7SlideIndex > 1) {
							sliding = true;
							$.fn.fullpage.moveSlideLeft();
							return false;
						}
					} else if (sliding) {
						return false;
					}
				}
				if (index == 9){
					if (!sliding) {					
						if (direction == 'down' && index9SlideIndex < index9SlideCount) {
							sliding = true;
							$.fn.fullpage.moveSlideRight();
							return false;
						} else if (direction == 'up' && index9SlideIndex > 1) {
							sliding = true;
							$.fn.fullpage.moveSlideLeft();
							return false;
						}
					} else if (sliding) {
						return false;
					}
				}
				if (index == 11){
					if (!sliding) {					
						if (direction == 'down' && index11SlideIndex < index11SlideCount) {
							sliding = true;
							$.fn.fullpage.moveSlideRight();
							return false;
						} else if (direction == 'up' && index11SlideIndex > 1) {
							sliding = true;
							$.fn.fullpage.moveSlideLeft();
							return false;
						}
					} else if (sliding) {
						return false;
					}
				}
				if (index == 13){
					if (!sliding) {					
						if (direction == 'down' && index13SlideIndex < index13SlideCount) {
							sliding = true;
							$.fn.fullpage.moveSlideRight();
							return false;
						} else if (direction == 'up' && index13SlideIndex > 1) {
							sliding = true;
							$.fn.fullpage.moveSlideLeft();
							return false;
						}
					} else if (sliding) {
						return false;
					}
				}
			},
			afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
				sliding = false;
			},
			onSlideLeave  : function (anchorLink, index, slideIndex, direction, nextSlideIndex) {
				if (index == 5) {
					if (direction == 'right') {
						sliding = true;
						index5SlideIndex++;
					}
					if (direction == 'left') {
						sliding = true;
						index5SlideIndex--;
					}
				}
				if (index == 7) {
					if (direction == 'right') {
						sliding = true;
						index7SlideIndex++;
					}
					if (direction == 'left') {
						sliding = true;
						index7SlideIndex--;
					}
				}
				if (index == 9) {
					if (direction == 'right') {
						sliding = true;
						index9SlideIndex++;
					}
					if (direction == 'left') {
						sliding = true;
						index9SlideIndex--;
					}
				}
				if (index == 11) {
					if (direction == 'right') {
						sliding = true;
						index11SlideIndex++;
					}
					if (direction == 'left') {
						sliding = true;
						index11SlideIndex--;
					}
				}
				if (index == 13) {
					if (direction == 'right') {
						sliding = true;
						index13SlideIndex++;
					}
					if (direction == 'left') {
						sliding = true;
						index13SlideIndex--;
					}
				}
			}
		});

		
	}
	if($(window).width() <= 767){
		var yello1Pos = $('#yello-1').offset().top,
			yello2Pos = $('#yello-2').offset().top,
			yello3Pos = $('#yello-3').offset().top,
			windowHeight = $(window).height();
		
		$(window).on('scroll', function(){
			var windowScrollTop = $(window).scrollTop();
			if( ((windowScrollTop > (yello1Pos - 45)) && (windowScrollTop < (yello2Pos - 45))) || (windowScrollTop > (yello3Pos - 45)) ){
				$('.crypterium-link').addClass('white');
			} else{
				$('.crypterium-link').removeClass('white');
			}
		});
	}
	
	/*sounds*/
	var soundChicken = $("#sound-chicken")[0];
	$('#js-play-chicken').click(function() {
		 soundChicken.play();
	});
	var soundWaves = $("#sound-waves")[0];
	$('#js-play-waves').click(function() {
		 soundWaves.play();
	});
	var soundMorze = $("#sound-morze")[0];
	$('#js-play-morze').click(function() {
		 soundMorze.play();
	});
	var soundATM = $("#sound-atm")[0];
	$('#js-play-atm').click(function() {
		 soundATM.play();
	});
	var soundBaby = $("#sound-baby")[0];
	$('#js-play-baby').click(function() {
		 soundBaby.play();
	});
	
	/*animations*/	
	$('#js-anim-1').mouseover(function(){
		if(!($(this).hasClass('run'))){
			$(this).addClass('run');
			function stopAnim1(){
				$('#js-anim-1').removeClass('run');
			}
			setTimeout(stopAnim1, 4000);
		}
	});
	$('#js-anim-5-2').mouseover(function(){
		if(!($(this).hasClass('run'))){
			$(this).addClass('run');
			function stopAnim1(){
				$('#js-anim-5-2').removeClass('run');
			}
			setTimeout(stopAnim1, 1400);
		}
	});
	$('#js-anim-8').mouseover(function(){
		if(!($(this).hasClass('run'))){
			$(this).addClass('run');
			function stopAnim1(){
				$('#js-anim-8').removeClass('run');
			}
			setTimeout(stopAnim1, 1000);
		}
	});
	$('#js-anim-10').mouseover(function(){
		if(!($(this).hasClass('run'))){
			$(this).addClass('run');
			function stopAnim1(){
				$('#js-anim-10').removeClass('run');
			}
			setTimeout(stopAnim1, 1600);
		}
	});
	$('#js-anim-11-2').mouseover(function(){
		if(!($(this).hasClass('run'))){
			$(this).addClass('run');
			function stopAnim1(){
				$('#js-anim-11-2').removeClass('run');
			}
			setTimeout(stopAnim1, 1500);
		}
	});
	$('#js-anim-16').mouseover(function(){
		if(!($(this).hasClass('run'))){
			$(this).addClass('run');
			function stopAnim1(){
				$('#js-anim-16').removeClass('run');
			}
			setTimeout(stopAnim1, 800);
		}
	});
});
