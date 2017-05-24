import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('login');
  this.route('story');
  this.route('location');
  this.route('schedule');
  this.route('registry');
  this.route('guests');
  this.route('rsvp');
  this.route('recorded');
  this.route('responses');
});

export default Router;
