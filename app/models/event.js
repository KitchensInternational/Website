import Ember from 'ember';
import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Contentful.extend({
    title: attr('string'),
    slug: attr('string'),
    eventDate: attr('date'),
    bookingDate: attr('date'),
    location: attr('string'),
    description: attr('string'),
    snippet: attr('string'),
    excerpt: Ember.computed('description', 'snippet', function () {
        return this.get('snippet') ? this.get('snippet') : this.get('description').substr(0, 250) + '...';
    }),
    featuredImage: belongsTo('contentful-asset'),
    featuredImageProxy: Ember.computed('featuredImage', function () {
        let featuredImage = this.get('featuredImage.file.url');
        if ( featuredImage ) {
            return featuredImage;
        }
        return '/assets/images/default-featured-image.jpg';
    })
});
