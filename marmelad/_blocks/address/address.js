$('.address__map-btn--fullscreen').on('click', function(){
    $('.address__map').toggleClass('fullscreen')
});

if($('.address').length) {

var elementsParent = $('.locations');
var elements = $('.js-location');

initMap();

function initMap() {
    var map;
    var btnZoomIn = document.querySelector('.address__map-btn.btn-plus');
    var btnZoomOut = document.querySelector('.address__map-btn.btn-minus');
    map = new google.maps.Map(document.getElementById('map'), {
        center: {lat: 55.76756326414851, lng: 37.56636777425447},
        zoom: 10,
        disableDefaultUI: true,
      styles: [
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e9e9e9"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "landscape",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 17
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 29
                },
                {
                    "weight": 0.2
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 18
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f5f5f5"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dedede"
                },
                {
                    "lightness": 21
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "visibility": "on"
                },
                {
                    "color": "#ffffff"
                },
                {
                    "lightness": 16
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "saturation": 36
                },
                {
                    "color": "#333333"
                },
                {
                    "lightness": 40
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                },
                {
                    "color": "#000"
                },
                {
                    "lightness": 60
                }
            ]
        },
        {
            "featureType": "transit",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#f2f2f2"
                },
                {
                    "lightness": 19
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.fill",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 20
                }
            ]
        },
        {
            "featureType": "administrative",
            "elementType": "geometry.stroke",
            "stylers": [
                {
                    "color": "#fefefe"
                },
                {
                    "lightness": 17
                },
                {
                    "weight": 1.2
                }
            ]
        }
    ]
    });

    var popupContent = '<p class="content">Что угодно</p>';

    var iconDefault = 'img//map-marker.svg';
    var iconActive = 'img//map-marker-active.svg';

    var icon = {
        url: iconDefault,
        scaledSize: new google.maps.Size(37,46)
    };


    elements.each(function () {
        var lat = parseFloat(this.dataset.lat);
        var lng = parseFloat(this.dataset.lng);
        var popupId = this.dataset.id;

        var marker = new google.maps.Marker({
            id: popupId,
            position: {lat: lat, lng: lng},
            scaledSize: new google.maps.Size(37,46),
            map: map,
            icon: icon
        });

        marker.addListener('click', function() {
            elementsParent.addClass('is-opened')
            elements.removeClass('is-opened')
            elements.filter('[data-id="'+marker.id+'"]').addClass('is-opened')
            map.setCenter(marker.getPosition())
            map.setZoom(11)
            // console.log($('div[role="button"]').offset().top)

        });
    });



    btnZoomIn.addEventListener('click', function(){
        map.setZoom(map.getZoom() + 1);
    });

    btnZoomOut.addEventListener('click', function(){
        map.setZoom(map.getZoom() - 1);
    });
};
}
