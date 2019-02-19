import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Contentful.extend({
    name: attr('string'),
    title: attr('string'),
    author: attr('string'),
    images: hasMany('contentful-asset'),
    description: attr('string')

});
