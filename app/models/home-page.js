import Contentful from 'ember-data-contentful/models/contentful';
import attr from 'ember-data/attr';
import { belongsTo, hasMany } from 'ember-data/relationships';

export default Contentful.extend({
    name: attr('string'),
    titleText: attr('string'),
    slug: attr('string'),
    heading: attr('string'),
    callToAction: attr('string'),
    callToActionLink: attr('string'),
    introduction: attr('string'),
    carouselImages: hasMany('contentful-asset'),
    splashHeading: attr('string'),
    splashContent: attr('string'),
    splashActionTitle: attr('string'),
    splashActionLink: attr('string'),
    textLeftImage: belongsTo('contentful-asset'),
    textLeftHeading: attr('string'),
    textLeftContent: attr('string'),
    textLeftActionTitle: attr('string'),
    textLeftActionLink: attr('string'),
    imageOverlayTop: belongsTo('contentful-asset'),
    imageOverlayTopHeading: attr('string'),
    imageOverlayTopContent: attr('string'),
    imageOverlayTopActionTitle: attr('string'),
    imageOverlayTopActionLink: attr('string'),
    textRightImage: belongsTo('contentful-asset'),
    textRightHeading: attr('string'),
    textRightContent: attr('string'),
    textRightContentTwo: attr('string'),
    textRightActionTitle: attr('string'),
    textRightActionLink: attr('string'),
    imageOverlayBottom: belongsTo('contentful-asset'),
    imageOverlayBottomHeading: attr('string'),
    imageOverlayBottomContent: attr('string'),
    imageOverlayBottomActionTitle: attr('string'),
    imageOverlayBottomActionLink: attr('string'),
    socialImage: belongsTo('contentful-asset'),
    socialSubtitle: attr('string'),
    socialIntroduction: attr('string'),
    eventsImage: belongsTo('contentful-asset'),
    eventsSubtitle: attr('string'),
    eventsCallToAction: attr('string'),
    eventsIntroduction: attr('string'),
});
