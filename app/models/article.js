import Ember from 'ember';
import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Contentful.extend({
    title: attr('string'),
    titleText: attr('string'),
    slug: attr('string'),
    publicationDate: attr('date'),
    content: attr('string'),
    snippet: attr('string'),
    excerpt: Ember.computed('content', 'snippet', function () {
        return this.get('snippet') ? this.get('snippet') : this.get('content').substr(0, 250) + '...';
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
