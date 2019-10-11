import Ember from 'ember';
import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Contentful.extend({
    title: attr('string'),
    titleText: attr('string'),
    slug: attr('string'),
    times: attr('string'),
    maximumNumberOfPeople: attr('number'),
    arrayOfPeople: Ember.computed('maximumNumberOfPeople', function () {
        let num = this.get('maximumNumberOfPeople');
        return num ?  Array.from(Array(num).keys()) : null;
    }),
    arrayOfTime: Ember.computed('times', function () {
        let num = this.get('times');
        return num ? num.split(',') : null
    }),
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
    }),
    metaTitle: attr('string'),
    metaDescription: attr('string'),
    metaImage: belongsTo('contentful-asset')
});
