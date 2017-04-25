import Ember from 'ember';

export default Ember.Component.extend({
    classNames: ['store-locations'],
    googleMapService: Ember.inject.service('google-map'),
    _center: { lat: 55.9396122, lng: -3.2431527 },
    _zoom: 16,
    _map: null,
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
        return Ember.K();
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
