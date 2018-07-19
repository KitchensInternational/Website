import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Contentful.extend({
    name: attr('string'),
    titleText: attr('string'),
    slug: attr('string'),
    heading: attr('string'),
    featuredImage: belongsTo('contentful-asset'),
    introduction: attr('string'),
    carouselImages: hasMany('contentful-asset'),
    splashContent: attr('string'),
    splashActionTitle: attr('string'),
    splashActionLink: attr('string'),
    featuredSaleImage: belongsTo('contentful-asset'),
    featuredSaleContent: attr('string'),
    featuredSaleActionTitle: attr('string'),
    featuredSaleActionLink: attr('string'),
    appliancePackContent: attr('string'),
    featuredSaleImageTwo: belongsTo('contentful-asset'),
    featuredSaleContentTwo: attr('string'),
    featuredSaleActionTitleTwo: attr('string'),
    featuredSaleActionLinkTwo: attr('string'),
    textBottom: belongsTo('contentful-asset'),
    textBottomHeading: attr('string'),
    textBottomContent: attr('string'),
    textBottomActionTitle: attr('string'),
    textBottomActionLink: attr('string'),
    metaTitle: attr('string'),
    metaDescription: attr('string'),
    metaImage: belongsTo('contentful-asset')
});
