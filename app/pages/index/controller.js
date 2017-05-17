import Ember from 'ember';

export default Ember.Controller.extend({
  numPictures: 50,
  imageId: Ember.computed.alias('currentImage'),

  randomImage() {
    return parseInt(Math.random() * this.get('numPictures') + 1);
  },

  actions: {
    newPicture() {
      this.set('currentImage', this.randomImage());
    }
  }
});
