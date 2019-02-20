import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';
import Ember from 'ember';

export default Contentful.extend({
    name: attr('string'),
    title: attr('string'),
    author: attr('string'),
    images: attr('string'),
    votes: attr('number'),
    imagesArr: Ember.computed('images', function () {
        if (this.get('images')) {
            return this.get('images').split(',');
        } else {
            return [];
        }
    }),
    imagesText: attr('string'),
    description: attr('string')

});
