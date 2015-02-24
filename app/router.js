import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('broadcasts', function() {
    this.resource('broadcast', { path: '/:broadcast_id' });
  });
});

export default Router;
