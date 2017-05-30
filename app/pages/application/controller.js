import Ember from 'ember';

export default Ember.Controller.extend({
  content: Ember.inject.service('set-content')
});
