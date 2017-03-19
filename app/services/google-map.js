import Ember from 'ember';

const MAP_URL = 'https://maps.googleapis.com/maps/api/js?key=AIzaSyD-HH-O67ZZPb6WvurUD0GWdyRmadOc2TQ';
const GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json?key=AIzaSyDUZixElLb9RuEaiQCcFj7DE_XvVo_HQGM&address=';

export default Ember.Service.extend({

    mapApiLoaded: false,

    loadMap( targetObject, mapProperty, centerProperty, zoomProperty, callback ) {
        if ( this.get('mapApiLoaded') ) {
            this.addMap( targetObject, mapProperty, centerProperty, zoomProperty, callback );
        } else {
            Ember.$.getScript(MAP_URL, () => {
                this.set('mapApiLoaded', true);
                this.addMap( targetObject, mapProperty, centerProperty, zoomProperty, callback );
            });
        }
    },

    addMap( targetObject, mapProperty, centerProperty, zoomProperty, callback ) {
        let map = new google.maps.Map(targetObject.$('.map')[0], {
            center: targetObject.get(centerProperty),
            zoom: targetObject.get(zoomProperty),
            disableDefaultUI: true,
            gestureHandling: 'none',
            draggable: false,
            zoomControl: false,
            scrollwheel: false,
            disableDoubleClickZoom: true,
            styles: [
                {
                    "featureType": "landscape",
                    "elementType": "geometry",
                    "stylers": [
                        { "color": "#a8a8a8" }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "geometry",
                    "stylers": [
                        { "color": "#a8a8a8" }
                    ]
                },
                {
                    "featureType": "transit.station",
                    "elementType": "geometry",
                    "stylers": [
                        { "color": "#a8a8a8" }
                    ]
                },
                {
                    "featureType": "transit.line",
                    "elementType": "geometry",
                    "stylers": [
                        { "color": "#5f5f5f" }
                    ]
                },
                {
                    "featureType": "road",
                    "elementType": "geometry",
                    "stylers": [
                        { "color": "#5f5f5f" }
                    ]
                },
                {
                    "featureType": "water",
                    "elementType": "geometry",
                    "stylers": [
                        { "color": "#939393" }
                    ]
                },
                {
                    "featureType": "poi",
                    "elementType": "labels.icon",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },
                {
                    "featureType": "transit",
                    "elementType": "labels.icon",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },
                {
                    "featureType": "road.highway",
                    "elementType": "labels.icon",
                    "stylers": [
                        { "visibility": "off" }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.stroke",
                    "stylers": [
                        { "color": "#5f5f5f" }
                    ]
                },
                {
                    "featureType": "all",
                    "elementType": "labels.text.fill",
                    "stylers": [
                        { "color": "#ffffff" }
                    ]
                }
            ]
        });
        if ( typeof callback !== 'undefined' ) {
            map.addListener('center_changed', callback);
            map.addListener('zoom_changed', callback);
        }
        targetObject.set(mapProperty, map);
        return map;
    },

    addMarker( map, location, callback, locationMarker ) {
        let icon = 'assets/images/map-marker-retailer.png';
        if ( locationMarker === true ) {
            icon = 'assets/images/map-marker-location.png';
        }
        let marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: icon
        });
        marker.addListener('click', callback);
        return marker;
    },

    removeMarker( marker ) {
        if ( marker ) {
            marker.setMap(null);
        }
    },

    setMarkerActive( marker ) {
        marker.setIcon('assets/images/map-marker-retailer-active.png');
    },

    unsetMarkerActive( marker ) {
        marker.setIcon('assets/images/map-marker-retailer.png');
    },

    geocode( address ) {
        return Ember.$.ajax( GEOCODE_URL + encodeURIComponent(address) );
    }

});
