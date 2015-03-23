import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  
  this.route('top50', {path: 'featured'});
  this.route('about');
  this.resource('a-z', function(){
    this.route('letter', {path: ':letter'});
  });
  this.resource('search', function(){
    this.route('results', {path: ':keyword'});
  });
  this.resource('broadcasts', function() {
    this.route('latest');
    this.resource('broadcast', { path: '/:broadcast_id' }, function() {
      this.resource('mixes', function() {
        this.resource('mix', { path: '/:mix_id' }, function() {
        });
      });
      this.resource('tracks', function() {
        this.resource('track', { path: '/:track_id' });
      });
    });
  });
});

export default Router;
