import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Contentful.extend({
    name: attr('string'),
    slug: attr('string'),
    metaTitle: attr('string'),
    content: attr('string'),
    images: hasMany('contentful-asset'),
    metaDescription: attr('string'),
    metaImage: belongsTo('contentful-asset'),
    topImage: belongsTo('contentful-asset'),
    featuredImage: belongsTo('contentful-asset')

});
