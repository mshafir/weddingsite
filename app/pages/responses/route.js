import RequireLoginRoute from 'weddingsite/routes/require-login-route';

export default RequireLoginRoute.extend({
  model() {
    return this.store.findAll('response');
  }
});
