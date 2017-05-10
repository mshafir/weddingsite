import Ember from 'ember';

export default Ember.Controller.extend({
  numPictures: 50,
  imageId: Ember.computed.alias('currentImage'),

  init() {
    this._super(...arguments);
    this.set('currentImage', this.randomImage());
  },

  randomImage() {
    return parseInt(Math.random() * this.get('numPictures'))
  },

  actions: {
    newPicture() {
      this.set('currentImage', this.randomImage());
    }
  }
});
