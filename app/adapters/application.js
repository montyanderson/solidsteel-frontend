import DS from 'ember-data';

var Adapt = DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: 'http://localhost:3001'
});

//var Adapt =  DS.FixtureAdapter;

export default Adapt;