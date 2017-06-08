import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('story');

  this.route('location-camp');
  this.route('location-brooklyn');

  this.route('schedule-camp');
  this.route('schedule-brooklyn');

  this.route('lodging-camp');
  this.route('getting-there-camp');

  this.route('rsvp-camp');
  this.route('rsvp-brooklyn');

  this.route('story');

  this.route('recorded');
  this.route('responses');
});

export default Router;
