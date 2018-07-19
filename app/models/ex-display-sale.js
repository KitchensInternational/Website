import Ember from 'ember';
import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Contentful.extend({
    name: attr('string'),
    titleText: attr('string'),
    slug: attr('string'),
    publicationDate: attr('date'),
    heading: attr('string'),
    subheading: attr('string'),
    featuredImage: belongsTo('contentful-asset'),
    featuredImageProxy: Ember.computed('featuredImage', function () {
        let featuredImage = this.get('featuredImage.file.url');
        if ( featuredImage ) {
            return featuredImage;
        }
        return '/assets/images/default-featured-image.jpg';
    }),
    price: attr('string'),
    salePrice: attr('string'),
    images: hasMany('contentful-asset'),
    description: attr('string'),
    metaTitle: attr('string'),
    metaDescription: attr('string'),
    metaImage: belongsTo('contentful-asset')
});
