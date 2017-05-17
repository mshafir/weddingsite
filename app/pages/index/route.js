import Ember from 'ember';
import RequireLoginRoute from 'weddingsite/routes/require-login-route';

export default RequireLoginRoute.extend({
  setupController(controller) {
    this._super(...arguments);
    controller.set('currentImage', 9);
  }
});
