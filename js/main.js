$('.gallery-carousel').owlCarousel({
	center:true,
	autoplay:true,
	items:1,
	loop:true,
	margin:20,
	responsive:{
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:5
		}
	}
});
$('.brand').owlCarousel({
	center:true,
	autoplay:true,
	items:2,
	loop:true,
	margin:50,
	responsive:{
		
		0:{
			items:1
		},
		600:{
			items:3
		},
		1000:{
			items:3
		}
		
	}
});



