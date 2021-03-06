import Ember from 'ember';

export default Ember.Controller.extend({

  needs: ['broadcast'],

  keyword: '',

  actions: {

    playBroadcast: function(model){
        this.get('controllers.broadcast').stopCurrentMix(true);
        this.set('controllers.broadcast.audioOptIn', true);
        this.transitionToRoute('broadcast', model);
        // to transition to tracklist do....
        //this.transitionToRoute('tracks', model);
    },

    swipeAway: function() {
      this.transitionToRoute('search');
    },

  }

});