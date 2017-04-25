import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';

export default Contentful.extend({
    town: attr('string'),
    name: attr('string'),
    slug: attr('string'),
    heading: attr('string'),
    introduction: attr('string')
});
