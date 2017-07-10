import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Contentful.extend({
    name: attr('string'),

    slug: Ember.computed('name', function () {
        return this.get('name').toLowerCase().replace(/ /, '-');
    }),

    order: attr('number'),
    featuredImage: belongsTo('contentful-asset'),
    contentArea1: attr('string'),
    contentArea2: attr('string'),
    contentArea3: attr('string'),
    contentArea4: attr('string'),
    contentArea5: attr('string'),
    contentArea6: attr('string'),

    isDoubleRow: Ember.computed(
    'contentArea1',
    'contentArea2',
    'contentArea3',
    'contentArea4',
    'contentArea5',
    'contentArea6', function () {
        let count = 0;
        for ( let n = 1; n <= 6; n++ ) {
            if ( this.get('contentArea' + n) ) {
                count++;
            }
        }
        return count > 4 ? true : false;
    })

});
