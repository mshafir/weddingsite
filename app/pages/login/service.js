import Ember from 'ember';

const LOGIN_KEY = '2284';

export default Ember.Service.extend({
  loggedIn: false,
  logIn(text) {
    if (text === LOGIN_KEY) {
      this.set('loggedIn', true);
      return true;
    } else {
      return false;
    }
  }
});
