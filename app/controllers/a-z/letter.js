import Ember from 'ember';

export default Ember.Controller.extend({

  letter: '',

  entries: '',

  data: {
  	'a': ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'],
  	'b': ['b', 'bb', 'bbbbbb', 'bbbbbbbb', 'bb'],
  	'c': ['c', 'cc', 'ccccccccccccccccc', 'ccc', 'ccccccc']
  },

  entry: function() {
	this.set('entries', this.data[this.get('model.letter')]);
  }.observes("model.letter")
  
});