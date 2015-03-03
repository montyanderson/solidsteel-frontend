import DS from 'ember-data';

var Adapt = DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: 'http://178.62.43.232'
});

//export default DS.FixtureAdapter;

export default Adapt;