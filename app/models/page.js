import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Contentful.extend({
    town: attr('string'),
    name: attr('string'),
    slug: attr('string'),
    heading: attr('string'),
    introduction: attr('string'),
    featuredImage: belongsTo('contentful-asset')
});
