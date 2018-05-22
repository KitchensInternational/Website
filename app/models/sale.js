import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo} from 'ember-data/relationships';
import Ember from 'ember';

export default Contentful.extend({
    name: attr('string'),
    titleText: attr('string'),
    slug: Ember.computed('name', function () {
        return this.get('name').toLowerCase().replace(/ /, '-');
    }),
    order: attr('number'),
    featuredImage: belongsTo('contentful-asset'),
    appliancePackContent1: attr('string'),
    appliancePackContent2: attr('string'),
    appliancePackContent3: attr('string'),
    appliancePackContent4: attr('string'),
    appliancePackContent5: attr('string'),
    saleInfo: attr('string')
});
