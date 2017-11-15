$(function() {

	$('.main_slider').owlCarousel({
		items:1,
		dots:false,
        nav:true,
		loop:true,
		animateOut: 'fadeOut',
        animateIn: 'fadeIn',
        autoplay:true,
        slideSpeed: 300
	});
    $('.news_slider').owlCarousel({
        items:1,
        dots:true,
        nav:true,
        loop:true
    });

	$('.testimonials_slider').owlCarousel({
		items:2,
		dots:false,
		nav:true,
		loop:true,
		margin:0,
        responsive:{
            0:{
                items:1,
                stagePadding: 0
            },
            768:{
                items:1
            },
            992:{
                items:2
            }
        }
	});
    $('.equipment_slider').owlCarousel({
        items:5,
        dots:false,
        nav:true,
        loop:true,
        margin:30,
        responsive:{
            0:{
                items:2,
                stagePadding: 0
            },
            768:{
                items:4
            },
            992:{
                items:5
            }
        }
    });

    $(".accordeon dd").hide().prev().click(function() {
        $(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
        $(this).next().not(":visible").slideDown().prev().addClass("active");
    });
});

