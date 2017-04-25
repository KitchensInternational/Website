import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';

export default Contentful.extend({
    town: attr('string'),
    name: attr('string'),
    slug: attr('string'),
    address: attr('string'),
    telephone: attr('string'),
    openingHours: attr('string'),
    location: attr('json'),
    description: attr('string')
});
