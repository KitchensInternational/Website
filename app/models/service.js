import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Contentful.extend({
    heading: attr('string'),
    titleText: attr('string'),
    order: attr('number'),
    introduction: attr('string'),
    role: attr('string'),
    quote: attr('string'),
    image: belongsTo('contentful-asset'),
    metaTitle: attr('string'),
    metaDescription: attr('string'),
    metaImage: belongsTo('contentful-asset')
});
