import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Contentful.extend({
    name: attr('string'),
    slug: attr('string'),
    location: attr('string'),
    featuredImage: belongsTo('contentful-asset'),
    images: hasMany('contentful-asset'),
    brief: attr('string'),
    consultation: attr('string'),
    design: attr('string'),
    install: attr('string'),
    signOff: attr('string'),
    commercialProject: attr('boolean'),
});