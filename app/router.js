import Ember from 'ember';
import config from './config/environment';
import googlePageview from './mixins/google-pageview';

const Router = Ember.Router.extend(googlePageview, {
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('stories');
  this.route('story', { path: 'stories/:slug' });
  this.route('design-service');
  this.route('store', { path: 'store/:slug' });
  this.route('projects', { path: 'projects' });
  this.route('project', { path: 'projects/:slug' });
  this.route('kitchens', { path: 'kitchens' });
  this.route('kitchen', { path: 'kitchens/:slug' });
  this.route('commercials', { path: 'commercial' });
  this.route('commercial', { path: 'commercial/:slug' });
  this.route('endorsements');
  this.route('contact');
  this.route('events');
});

export default Router;
