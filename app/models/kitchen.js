import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Contentful.extend({
    name: attr('string'),
    titleText: attr('string'),
    slug: attr('string'),
    featuredImage: belongsTo('contentful-asset'),
    excerpt: attr('string'),
    introduction: attr('string'),
    images: hasMany('contentful-asset'),
    brochure: belongsTo('contentful-asset'),
    order: attr('number')
});
