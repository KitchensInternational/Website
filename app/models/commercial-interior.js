import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Contentful.extend({
    name: attr('string'),
    slug: attr('string'),
    titleText: attr('string'),
    ranking: attr('number', { defaultValue: 1 }),
    featuredImage: belongsTo('contentful-asset'),
    introText: attr('string'),
    briefHeadline: attr('string'),
    brief: attr('string'),
    solutionImage: belongsTo('contentful-asset'),
    solutionText: attr('string'),
    solutionHeadline: attr('string'),
    quote1Content: attr('string'),
    quote1Image: belongsTo('contentful-asset'),
    quote2Content: attr('string'),
    quote2Image: belongsTo('contentful-asset'),
    images: hasMany('contentful-asset'),
    metaTitle: attr('string'),
    metaDescription: attr('string'),
    metaImage: belongsTo('contentful-asset')
});
