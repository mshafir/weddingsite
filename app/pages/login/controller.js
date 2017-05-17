import Ember from 'ember';

export default Ember.Controller.extend({
  login: Ember.inject.service(),
  actions: {
    submit() {
      if (this.get('login').logIn(this.get('loginCode'))) {
        this.transitionToRoute('index');
      } else {
        this.set('errorMessage', 'Incorrect Password');
      }
    }
  }
});
