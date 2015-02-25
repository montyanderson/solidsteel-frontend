import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('broadcasts', function() {
    this.resource('broadcast', { path: '/:broadcast_id' }, function() {
      this.resource('mixes', function() {
        this.resource('mix', { path: '/:mix_id' }, function() {
          this.resource('tracks', function() {
            this.resource('track', { path: '/:track_id' });
          });
        });
      });
    });
  });
});

export default Router;
