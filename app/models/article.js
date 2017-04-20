import Ember from 'ember';
import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo } from 'ember-data/relationships';

export default Contentful.extend({
    title: attr('string'),
    slug: attr('string'),
    publicationDate: attr('date'),
    content: attr('string'),
    snippet: attr('string'),
    excerpt: Ember.computed('content', 'snippet', function () {
        return this.get('snippet') ? this.get('snippet') : this.get('content').substr(0, 250) + '...';
    }),
    featuredImage: belongsTo('contentful-asset'),
});
