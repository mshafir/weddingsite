import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',
  email: '',
  number: '',
  coming: '',
  staying: '',
  comingFrom: '',
  foodRequirements: '',
  anythingElse: '',

  actions: {
    send() {
      let response = this.store.createRecord('response', {
        name: this.get('name'),
        email: this.get('email'),
        number: this.get('number'),
        coming: this.get('coming'),
        staying: this.get('staying'),
        comingFrom: this.get('comingFrom'),
        foodRequirements: this.get('foodRequirements'),
        anythingElse: this.get('anythingElse'),
        whichWedding: 'brooklyn'
      });
      response.save().then(() => {
        this.transitionToRoute('recorded');
      });
    },
    clearComing() {
      this.set('coming', '');
    }
  }
});
