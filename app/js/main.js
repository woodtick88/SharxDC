$(function() {

    
    // hamburger icon

    $("#hamburger").click(function() {
        $("#hamburger").toggleClass("hamburger-active");
    });

    $(".main-header .user .mobile-nav").click(function() {
        $(".main-header .user .mobile-nav").toggleClass("mobile-nav-active");
    });


    //slider in .partners section


    $('.partners .partners-slider').slick({
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: true
    });



    // scroll from #top-scroll-button to section #news

	$("#top-scroll-button").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 1500);
	});


	
	// scroll from #more-button to section #about-company

	$("#more-button").on("click", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top - 88;
		
		//анимируем переход на расстояние - top за 1000 мс
		$('body,html').animate({scrollTop: top}, 1000);
	});
	

    

    $(window).scroll(function(){

		// Scroll nav

		const scrollNav = $('.main-nav-wrapper');
		const scrollTop = $(this).scrollTop();
		const scrollNavHeight = scrollNav.height();
		
        if ( scrollTop > 1 ) {
			scrollNav.addClass('scroll-nav');
        } else if (( scrollTop < 1 )) {
			scrollNav.removeClass('scroll-nav');
		}			
		

	});
        
    // Scroll nav исправление бага - добавление класа при перезагрузке страницы

	const scrollNav = $('.main-nav-wrapper');
	const scrollTop = $(this).scrollTop();
	const scrollNavHeight = scrollNav.height();
	
	if ( scrollTop > 1) {
		scrollNav.addClass('scroll-nav');
	} else if (( scrollTop < 1 )) {
		scrollNav.removeClass('scroll-nav');
	}



});
  