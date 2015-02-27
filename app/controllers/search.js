import Ember from 'ember';

export default Ember.Controller.extend({
	// the initial value of the `search` property
  search: '',

  actions: {
    query: function() {
      // the current value of the text field
      var query = this.get('search');
      alert(query);
      //this.transitionToRoute('search', { query: query });


      // make query to API

      // show results timeline

      // open sidepanel with results
    }
  }
});