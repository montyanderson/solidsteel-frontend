import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['application'],

  itemController: 'mix',

  showingTracks: false,

  plusMinus: "+",

  currentPart: 1,

  setCurrentMix: function(){

    //console.log(this.get('controllers'));
    console.log(this.get('model.mixes').objectAt(0));
    

    this.get('controllers').forEach(function(itemController){
      console.log(itemController);
    });
    //console.log(this.get('content').get('mixes').objectAt(0).get('name'));

    // this.get('content').get('mixes').forEach(function(m){
    //   console.log(m.get('name'));
    // })
  },

  actions: {

  	toggleTrax: function(){
  		if (!this.showingTracks) {
  			this.transitionTo('tracks');
  			this.set('showingTracks', true);
  			this.set('plusMinus', '–');
  		} else {
  			this.transitionTo('broadcast');
  			this.set('showingTracks', false);
  			this.set('plusMinus', '+');
  		}
  	}

  }
});