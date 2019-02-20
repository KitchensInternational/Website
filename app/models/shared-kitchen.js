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
    gallery: hasMany('contentful-asset'),
    isGallery: attr('boolean'),
    type: Ember.computed('name', function () {
        if (this.get('name')) {
            return this.get('name').replace(/ /g, '-')
                .replace(/[^\w-]+/g, '')
        } else {
            return 'id';
        }
    }),
    imagesArr: Ember.computed('images', function () {
        if (this.get('images')) {
            return this.get('images').split(',');
        } else {
            return [];
        }
    }),
    approved: attr('boolean'),
    imagesText: attr('string'),
    description: attr('string')

});
