$('.address__map-btn--fullscreen').on('click', function(){
    $('.address__map').toggleClass('fullscreen')
});


        // function initMap() {
        //     var map;
        //     var btnZoomIn = document.querySelector('.address__map-btn.btn-plus');
        //     var btnZoomOut = document.querySelector('.address__map-btn.btn-minus');
        //     map = new google.maps.Map(document.querySelector('map'), {
        //         center: {lat: 55.76756326414851, lng: 37.56636777425447},
        //         zoom: 10,
        //         disableDefaultUI: true,
        //       styles: [
        //         {
        //             "featureType": "water",
        //             "elementType": "geometry",
        //             "stylers": [
        //                 {
        //                     "color": "#e9e9e9"
        //                 },
        //                 {
        //                     "lightness": 17
        //                 }
        //             ]
        //         },
        //         {
        //             "featureType": "landscape",
        //             "elementType": "geometry",
        //             "stylers": [
        //                 {
        //                     "color": "#f5f5f5"
        //                 },
        //                 {
        //                     "lightness": 20
        //                 }
        //             ]
        //         },
        //         {
        //             "featureType": "road.highway",
        //             "elementType": "geometry.fill",
        //             "stylers": [
        //                 {
        //                     "color": "#ffffff"
        //                 },
        //                 {
        //                     "lightness": 17
        //                 }
        //             ]
        //         },
        //         {
        //             "featureType": "road.highway",
        //             "elementType": "geometry.stroke",
        //             "stylers": [
        //                 {
        //                     "color": "#ffffff"
        //                 },
        //                 {
        //                     "lightness": 29
        //                 },
        //                 {
        //                     "weight": 0.2
        //                 }
        //             ]
        //         },
        //         {
        //             "featureType": "road.arterial",
        //             "elementType": "geometry",
        //             "stylers": [
        //                 {
        //                     "color": "#ffffff"
        //                 },
        //                 {
        //                     "lightness": 18
        //                 }
        //             ]
        //         },
        //         {
        //             "featureType": "road.local",
        //             "elementType": "geometry",
        //             "stylers": [
        //                 {
        //                     "color": "#ffffff"
        //                 },
        //                 {
        //                     "lightness": 16
        //                 }
        //             ]
        //         },
        //         {
        //             "featureType": "poi",
        //             "elementType": "geometry",
        //             "stylers": [
        //                 {
        //                     "color": "#f5f5f5"
        //                 },
        //                 {
        //                     "lightness": 21
        //                 }
        //             ]
        //         },
        //         {
        //             "featureType": "poi.park",
        //             "elementType": "geometry",
        //             "stylers": [
        //                 {
        //                     "color": "#dedede"
        //                 },
        //                 {
        //                     "lightness": 21
        //                 }
        //             ]
        //         },
        //         {
        //             "elementType": "labels.text.stroke",
        //             "stylers": [
        //                 {
        //                     "visibility": "on"
        //                 },
        //                 {
        //                     "color": "#ffffff"
        //                 },
        //                 {
        //                     "lightness": 16
        //                 }
        //             ]
        //         },
        //         {
        //             "elementType": "labels.text.fill",
        //             "stylers": [
        //                 {
        //                     "saturation": 36
        //                 },
        //                 {
        //                     "color": "#333333"
        //                 },
        //                 {
        //                     "lightness": 40
        //                 }
        //             ]
        //         },
        //         {
        //             "elementType": "labels.icon",
        //             "stylers": [
        //                 {
        //                     "visibility": "off"
        //                 },
        //                 {
        //                     "color": "#000"
        //                 },
        //                 {
        //                     "lightness": 60
        //                 }
        //             ]
        //         },
        //         {
        //             "featureType": "transit",
        //             "elementType": "geometry",
        //             "stylers": [
        //                 {
        //                     "color": "#f2f2f2"
        //                 },
        //                 {
        //                     "lightness": 19
        //                 }
        //             ]
        //         },
        //         {
        //             "featureType": "administrative",
        //             "elementType": "geometry.fill",
        //             "stylers": [
        //                 {
        //                     "color": "#fefefe"
        //                 },
        //                 {
        //                     "lightness": 20
        //                 }
        //             ]
        //         },
        //         {
        //             "featureType": "administrative",
        //             "elementType": "geometry.stroke",
        //             "stylers": [
        //                 {
        //                     "color": "#fefefe"
        //                 },
        //                 {
        //                     "lightness": 17
        //                 },
        //                 {
        //                     "weight": 1.2
        //                 }
        //             ]
        //         }
        //     ]
        //     });

        //     var icon = {
        //         url: 'img//map-marker.svg',
        //         scaledSize: new google.maps.Size(37,46)
        //     };
        //     var marker = new google.maps.Marker({
        //         position: {lat: 55.72513461190498 , lng: 37.67456808493443},
        //         scaledSize: new google.maps.Size(37,46),
        //         map: map,
        //         icon: icon
        //     });
        //     var marker2 = new google.maps.Marker({
        //         position: {lat: 55.79919555444575, lng: 37.39100411377238},
        //         scaledSize: new google.maps.Size(37,46),
        //         map: map,
        //         icon: icon
        //     });
        //     btnZoomIn.addEventListener('click', function(){
        //         map.setZoom(map.getZoom() + 1);
        //     });

        //     btnZoomOut.addEventListener('click', function(){
        //         map.setZoom(map.getZoom() - 1);
        //     });
        // };
        // initMap();
