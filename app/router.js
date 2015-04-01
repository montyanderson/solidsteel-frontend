import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  
  this.route('top50', {path: 'featured'});
  this.route('about');
  this.route('subscribe');
  this.resource('a-z', function(){
    this.route('letter', {path: ':letter'});
  });
  this.resource('search', function(){
    this.route('results', {path: ':keyword'});
  });
  this.resource('broadcasts', function() {
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

Ember.Route.reopen({
  activate: function() {
    var cssClass = this.toCssClass();
    // you probably don't need the application class
    // to be added to the body
    if (cssClass !== 'application') {
      Ember.$('body').addClass(cssClass);
    }
  },
  deactivate: function() {
    Ember.$('body').removeClass(this.toCssClass());
  },
  toCssClass: function() {
    return this.routeName.replace(/\./g, '-').dasherize();
  }
});

export default Router;
