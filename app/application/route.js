import Ember from 'ember';

export default Ember.Route.extend({
  login: Ember.inject.service(),
  beforeModel(transition) {
    debugger;
    if (!this.get('login.loggedIn')) {
      this.transitionTo('login');
    }
  }
});
