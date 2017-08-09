import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';
import Ember from 'ember';

const DEFAULT_ZOOM = 10;

export default Contentful.extend({
    town: attr('string'),
    name: attr('string'),
    slug: attr('string'),
    address: attr('string'),
    telephone: attr('string'),
    openingHours: attr('string'),
    location: attr('json'),
    directionsUrl: Ember.computed('location', function () {
        let address = this.get('address'),
            location = this.get('location'),
            lat = location.lat,
            lng = location.lng,
            zoom = DEFAULT_ZOOM;
        return 'https://www.google.co.uk/maps/dir//' + address.replace(/\n/g, ",").replace(/ /g, "+");
    }),
    description: attr('string'),
    featuredImage: belongsTo('contentful-asset'),
    images: hasMany('contentful-asset')
});
