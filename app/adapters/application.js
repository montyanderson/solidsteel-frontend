import DS from 'ember-data';

var Adapt = DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: 'http://178.62.43.232'
});

var inflector = Ember.Inflector.inflector;
inflector.uncountable('search'); //only makes call to /advice

//export default DS.FixtureAdapter;

//Adapt.configure("plurals", { search: "search" });

export default Adapt;