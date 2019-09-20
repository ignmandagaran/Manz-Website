// A $( document ).ready() block.
// Preloader
  $(window).on('load', function() { // makes sure the whole site is loaded 
            $('.loading').fadeOut(); // will first fade out the loading animation 
            $('.sk-cube-grid').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website. 
            $('body').delay(350).css({'overflow':'visible'});
        })

  $( document ).ready(function() {
// Fixed Navbar
if ($('#topbar').length) {
	var bar = $('#topbar');
	var top = bar.css('top');
	$(window).scroll(function() {

		if($(this).scrollTop() > 0) {
			bar.stop().css({'position' : 'absolute'});
		}

		if($(this).scrollTop() > 600) {
			bar.stop().animate({'top' : '0px'}, 100).css({'position' : 'fixed'});
		} else {
			bar.stop().animate({'top' : top}, 100);
		}
	});
    
    $(".carousel-partners").slick({
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      lazyLoad: 'ondemand',
      autoplay: true,
      autoplaySpeed: 2000,
      });

    }
      
      

//Background image
$( '.img-wrap' ).each( function(){
    var img = $( this ).find( 'img' );
    var src = img.attr( 'src' );
    $( this ).css( 'background-image', 'url( '+ src +' )' );
});


// Testimonial
if ($('.testimonial-slide').length) {
	$('.testimonial-slide').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 3000,
		arrows: false,
		dots: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: false,
				slidesToShow: 1
			}
		}
		]
	});
}

// Back to top
if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
    backToTop = function () {
    	var scrollTop = $(window).scrollTop();
    	if (scrollTop > scrollTrigger) {
    		$('#back-to-top').addClass('show');
    	} else {
    		$('#back-to-top').removeClass('show');
    	}
    };
    backToTop();
    $(window).on('scroll', function () {
    	backToTop();
    });
    $('#back-to-top').on('click', function (e) {
    	e.preventDefault();
    	$('html,body').animate({
    		scrollTop: 0
    	}, 700);
    });
}

});

/* ================================================
  Styled Google Maps
  ================================================ */

// Want to customize colors? go to snazzymaps.com

 function myMap() {
	var maplat = $('#map').data('lat');
	var maplon = $('#map').data('lon');
	var mapzoom = $('#map').data('zoom');
    // Styles a map in night mode.
    var map = new google.maps.Map(document.getElementById('map'), {
    	center: { lat: maplat, lng: maplon },
    	zoom: mapzoom,
    	scrollwheel: false,
    	styles: [{
    		"elementType": "geometry",
    		"stylers": [{
    			"color": "#f5f5f5"
    		}]
    	}, {
    		"elementType": "labels.icon",
    		"stylers": [{
    			"visibility": "off"
    		}]
    	}, {
    		"elementType": "labels.text.fill",
    		"stylers": [{
    			"color": "#616161"
    		}]
    	}, {
    		"elementType": "labels.text.stroke",
    		"stylers": [{
    			"color": "#f5f5f5"
    		}]
    	}, {
    		"featureType": "administrative.land_parcel",
    		"elementType": "labels.text.fill",
    		"stylers": [{
    			"color": "#bdbdbd"
    		}]
    	}, {
    		"featureType": "poi",
    		"elementType": "geometry",
    		"stylers": [{
    			"color": "#eeeeee"
    		}]
    	}, {
    		"featureType": "poi",
    		"elementType": "labels.text.fill",
    		"stylers": [{
    			"color": "#757575"
    		}]
    	}, {
    		"featureType": "poi.park",
    		"elementType": "geometry",
    		"stylers": [{
    			"color": "#e5e5e5"
    		}]
    	}, {
    		"featureType": "poi.park",
    		"elementType": "labels.text.fill",
    		"stylers": [{
    			"color": "#9e9e9e"
    		}]
    	}, {
    		"featureType": "road",
    		"elementType": "geometry",
    		"stylers": [{
    			"color": "#ffffff"
    		}]
    	}, {
    		"featureType": "road.arterial",
    		"elementType": "labels.text.fill",
    		"stylers": [{
    			"color": "#757575"
    		}]
    	}, {
    		"featureType": "road.highway",
    		"elementType": "geometry",
    		"stylers": [{
    			"color": "#dadada"
    		}]
    	}, {
    		"featureType": "road.highway",
    		"elementType": "labels.text.fill",
    		"stylers": [{
    			"color": "#616161"
    		}]
    	}, {
    		"featureType": "road.local",
    		"elementType": "labels.text.fill",
    		"stylers": [{
    			"color": "#9e9e9e"
    		}]
    	}, {
    		"featureType": "transit.line",
    		"elementType": "geometry",
    		"stylers": [{
    			"color": "#e5e5e5"
    		}]
    	}, {
    		"featureType": "transit.station",
    		"elementType": "geometry",
    		"stylers": [{
    			"color": "#eeeeee"
    		}]
    	}, {
    		"featureType": "water",
    		"elementType": "geometry",
    		"stylers": [{
    			"color": "#c9c9c9"
    		}]
    	}, {
    		"featureType": "water",
    		"elementType": "labels.text.fill",
    		"stylers": [{
    			"color": "#9e9e9e"
    		}]
    	}]
    });
var marker = new google.maps.Marker({
	position: { lat: maplat, lng: maplon },
	map: map,
	title: 'We are here!'
});
}