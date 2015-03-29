import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({
  
  needs: ['broadcasts'],

  rootpath: function(){
    return ENV.APP.API_HOST;
  }.property('rootpath'),

  actions: {
    sneakTracks: function(){
        this.model.reload();
    }

  }
});