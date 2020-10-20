$(function() {

    
    // hamburger icon

    $("#hamburger").click(function() {
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
		
        if ( scrollTop > scrollNavHeight ) {
			scrollNav.addClass('scroll-nav');
        } else if (( scrollTop < scrollNavHeight )) {
			scrollNav.removeClass('scroll-nav');
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