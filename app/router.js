import Ember from 'ember';
import config from './config/environment';
import GoogleAnalyticsRoute from 'ember-tracker/mixins/google-analytics-route';

const Router = Ember.Router.extend(GoogleAnalyticsRoute, {
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

  this.route('getting-there-camp');
  this.route('getting-there-brooklyn');

  this.route('lodging-camp');

  this.route('rsvp-camp');
  this.route('rsvp-brooklyn');

  this.route('story');
  this.route('shabbat-camp');

  this.route('recorded');
  this.route('responses');
});

export default Router;
