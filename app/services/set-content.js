import Ember from 'ember';

const BROOKYN_KEY = 'brooklyn';
const CAMP_KEY = 'camp';

export default Ember.Service.extend({
  content: CAMP_KEY,
  setBrooklyn() {
    this.set('content', BROOKYN_KEY);
  },
  setCamp() {
    this.set('content', CAMP_KEY);
  },
  isBrookyn: Ember.computed.equal('content', BROOKYN_KEY),
  isCamp: Ember.computed.equal('content', CAMP_KEY),
});
