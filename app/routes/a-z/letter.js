import Ember from 'ember';

export default Ember.Route.extend({

	data: {
	  	'a': ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'],
	  	'b': ['b', 'bb', 'bbbbbb', 'bbbbbbbb', 'bb'],
	  	'c': ['c', 'cc', 'ccccccccccccccccc', 'ccc', 'ccccccc'],
	  	'd': ['c', 'cc', 'ccccccccccccccccc', 'ccc', 'ccccccc'],
	  	'e': ['c', 'cc', 'ccccccccccccccccc', 'ccc', 'ccccccc'],
	  	'f': ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'],
	  	'g': ['b', 'bb', 'bbbbbb', 'bbbbbbbb', 'bb'],
	  	'h': ['c', 'cc', 'ccccccccccccccccc', 'ccc', 'ccccccc'],
	  	'i': ['c', 'cc', 'ccccccccccccccccc', 'ccc', 'ccccccc'],
	  	'j': ['c', 'cc', 'ccccccccccccccccc', 'ccc', 'ccccccc'],
	  	'k': ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'],
	  	'l': ['b', 'bb', 'bbbbbb', 'bbbbbbbb', 'bb'],
	  	'm': ['c', 'cc', 'ccccccccccccccccc', 'ccc', 'ccccccc'],
	  	'n': ['c', 'cc', 'ccccccccccccccccc', 'ccc', 'ccccccc'],
	  	'o': ['c', 'cc', 'ccccccccccccccccc', 'ccc', 'ccccccc'],
	  	'p': ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'],
	  	'q': ['b', 'bb', 'bbbbbb', 'bbbbbbbb', 'bb'],
	  	'r': ['c', 'cc', 'ccccccccccccccccc', 'ccc', 'ccccccc'],
	  	's': ['c', 'cc', 'ccccccccccccccccc', 'ccc', 'ccccccc'],
	  	't': ['c', 'cc', 'ccccccccccccccccc', 'ccc', 'ccccccc'],
	  	'u': ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'],
	  	'v': ['b', 'bb', 'bbbbbb', 'bbbbbbbb', 'bb'],
	  	'w': ['c', 'cc', 'ccccccccccccccccc', 'ccc', 'ccccccc'],
	  	'x': ['c', 'cc', 'ccccccccccccccccc', 'ccc', 'ccccccc'],
	  	'y': ['c', 'cc', 'ccccccccccccccccc', 'ccc', 'ccccccc'],
	  	'z': ['a', 'aa', 'aaa', 'aaaa', 'aaaaa'],
  	},

  	model: function(params) {
      return this.data[params.letter]; 
    }

});