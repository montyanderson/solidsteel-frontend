import DS from 'ember-data';

var Search = DS.Model.extend({
  broadcast_date: DS.attr(),
  session_name: DS.attr()
});

export default Search;