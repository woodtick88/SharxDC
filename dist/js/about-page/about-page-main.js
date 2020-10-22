$(function() {

    
    // hamburger icon

    $("#hamburger").click(function() {

		if ( $(window).width() <= 480) {

			if ( !($("#hamburger").hasClass("hamburger-active")) ) {
				scrollNav.addClass('scroll-nav');
			} 

		}


		$("#hamburger").toggleClass("hamburger-active");

		
		
    });

    $(".main-header .user .mobile-nav").click(function() {
        $(".main-header .user .mobile-nav").toggleClass("mobile-nav-active");
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
		
		if ( $(window).width() <= 480) {

			if ( $(".main-header .user .mobile-nav").hasClass("mobile-nav-active") ) {
				scrollNav.addClass('scroll-nav');
			} 

		}
		

	});
        
    // Scroll nav исправление бага - добавление класа при перезагрузке страницы

	const scrollNav = $('.main-nav-wrapper');
	const scrollTop = $(this).scrollTop();
	const scrollNavHeight = scrollNav.height();
	
	if ( scrollTop > scrollNavHeight ) {
		scrollNav.addClass('scroll-nav');
	} else if (( scrollTop < scrollNavHeight )) {
		scrollNav.removeClass('scroll-nav');
	}



});