import Ember from 'ember';
import ENV from '../config/environment';

export default Ember.Controller.extend({

  rootpath: function(){
    return ENV.APP.API_HOST;
  }.property('rootpath'),

  actions: {
    sneakTracks: function(){
        if(this.get('model.mixes.firstObject.tracks.length') === 0) {
          this.model.reload();
        }
    }

  }
});