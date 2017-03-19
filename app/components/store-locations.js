import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['store-locations'],
    googleMapService: Ember.inject.service('google-map'),
    _center: { lat: 55.9396122, lng: -3.2431527 },
    _zoom: 16,
    _map: null,
    stores: Ember.A(),
    activeStoreIndex: 0,
    activeStore: Ember.computed('stores', 'stores.[]', 'activeStoreIndex', function () {
        let stores = this.get('stores'),
            count  = stores.get('length'),
            index  = this.get('activeStoreIndex');
        if ( count > 0 ) {
            index = index >= 0 && index <= count ? index : 0;
            return stores[index];
        }
        return Ember.K();
    }),
    updateMapLocationAfterStoreSelect: Ember.observer('activeStore', function () {
        this.get('_map').setCenter( this.get('activeStore.location') );
    }),
    didInsertElement() {
        this.get('googleMapService').loadMap( this, '_map', '_center', '_zoom' );
    },
    actions: {
        selectStore( index ) {
            this.set('activeStoreIndex', index);
        }
    }
});
