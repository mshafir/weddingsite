import RequireLoginRoute from 'weddingsite/routes/require-login-route';

export default RequireLoginRoute.extend({
  setupController(controller, model) {
    this._super(controller, model);
    controller.set('coming', '');
  }
});
