import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Contentful.extend({
    name: attr('string'),
    slug: attr('string'),
    order: attr('number'),
    featuredImage: belongsTo('contentful-asset'),
    contentArea1: attr('string'),
    contentArea2: attr('string'),
    contentArea3: attr('string'),
    contentArea4: attr('string'),
});
