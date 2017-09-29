import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['store-locations'],
    googleMapService: Ember.inject.service('google-map'),
    _center: { lat: 55.9396122, lng: -3.2431527 },
    _zoom: 14,
    _map: null,
    _marker: null,
    stores: Ember.A(),
    activeStoreSlug: null,
    activeStoreIndex: 0,
    activeStore: Ember.computed('stores', 'stores.[]', 'activeStoreIndex', function () {
        let stores = this.get('stores'),
            count  = stores.get('length'),
            index  = this.get('activeStoreIndex');
        if ( count > 0 ) {
            index = index >= 0 && index <= count ? index : 0;
            return stores.objectAt(index);
        }
        return null;
    }),
    setActiveStore: Ember.observer('stores', 'activeStoreSlug', function () {
        let storeSlug = this.get('activeStoreSlug');
        if ( storeSlug ) {
            let storeIndex = 0;
            this.get('stores').find(function (store, index) {
                if ( store.get('slug') === storeSlug ) {
                    storeIndex = index;
                    return true;
                }
                return false;
            });
            this.set('activeStoreIndex', storeIndex);
        }
    }),
    updateMapLocationAfterStoreSelect: Ember.observer('activeStore', function () {
        this.set('_center', this.get('activeStore.location'));
    }),
    updateMapOnCenterChange: Ember.observer('_center', function () {
        if ( this.get('_map') ) {
            this.get('_map').setCenter( this.get('_center') );
            this.get('googleMapService').removeMarker( this.get('_marker') );
            this.get('googleMapService').addMarker( this.get('_map'), this.get('_center') );
        }
    }),
    didInsertElement() {
        this.get('googleMapService').loadMap( this, '_map', '_center', '_zoom' );
    },
    actions: {
        selectStore( index ) {
            this.set('activeStoreIndex', index);
        },
        clickPhoneNumber( town, name ) {
            let label = town;
            if ( name ) {
                label = label + ' - ' + name;
            }
            ga('send', 'event', 'Click Phone Number', 'Store', label);
        }
    }
});
