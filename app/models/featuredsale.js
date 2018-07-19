import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Contentful.extend({
    featuredSaleTitle: attr('string'),
    createdAt: attr('date'),
    order: attr('number'),
    featuredSaleContent: attr('string'),
    featuredSaleButtonText: attr('string'),
    featuredSaleButtonLink: attr('string'),
    featuredSaleImage: belongsTo('contentful-asset')
});
