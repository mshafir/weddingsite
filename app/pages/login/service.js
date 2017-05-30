import Ember from 'ember';

// const CAMP_LOGIN_KEY = '1';
// const BROOKLYN_LOGIN_KEY = '2';
const CAMP_LOGIN_KEY = 'masonjars';
const BROOKLYN_LOGIN_KEY = 'svadba';

export default Ember.Service.extend({
  content: Ember.inject.service('set-content'),
  loggedIn: false,
  logIn(text) {
    if (text.toLowerCase() === CAMP_LOGIN_KEY) {
      this.set('loggedIn', true);
      this.get('content').setCamp();
      return true;
    } else if (text.toLowerCase() === BROOKLYN_LOGIN_KEY) {
      this.set('loggedIn', true);
      this.get('content').setBrooklyn();
      return true;
    } else {
      return false;
    }
  }
});
