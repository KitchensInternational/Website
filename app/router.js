import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function () {
  this.route('home', { path: '/' });
  this.route('stories');
  this.route('story', { path: 'stories/:slug' });
  this.route('events');
  this.route('event', { path: 'events/:slug' });
  this.route('design-service');
  this.route('store', { path: 'showroom/:slug' });
  this.route('projects', { path: 'projects' });
  this.route('project', { path: 'projects/:slug' });
  this.route('kitchens', { path: 'kitchens' });
  this.route('special-event', { path: '/:slug' });
  this.route('kitchen', { path: 'kitchens/:slug' });
  // this.route('sales', { path: 'summer-sale' });
  this.route('sales', { path: 'anniversary-sale' });
  // this.route('sale', { path: 'januarysale/:slug' });
  this.route('ex-display-sales', { path: 'ex-display-sale' });
  this.route('ex-display-sale', { path: 'ex-display-sale/:slug' });


  this.route('commercials', { path: 'contracts' });
  this.route('commercial', { path: 'contracts/:slug' });

  this.route('commercial-interiors', { path: 'commercial-interiors' });
  this.route('commercial-interiors', { path: 'commercial-interiors#*wildcard' });

  this.route('commercial-interior', { path: 'commercial-interiors/:slug' });

  this.route('endorsements');
  this.route('contact');
  this.route('privacy-policy');
});


export default Router;
