import Ember from 'ember';

export default Ember.Controller.extend({

  placeholder: function(){
    if(this.showingResults){
        return "Search...";
    } else {
        return "Search by artist, track, date...";
    }
  }.property('showingResults'),

  showingResults: false,

  searching: true

});