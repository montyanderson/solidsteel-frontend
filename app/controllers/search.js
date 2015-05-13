import Ember from 'ember';

export default Ember.Controller.extend({

  needs: ['application'],
  
  placeholder: function(){
    if(this.showingResults){
        return "Search...";
    } else {
        return "Search by artist...";
    }
  }.property('showingResults'),

  showingResults: false,

  searching: true,

  actions: {
  	query: function(){
  		document.activeElement.blur();
  		this.transitionToRoute('search.results', this.search);
  	}
  }

});