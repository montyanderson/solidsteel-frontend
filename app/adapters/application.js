import DS from 'ember-data';

var Adapt = DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: window.MyNewApp.API_HOST
});

//var Adapt =  DS.FixtureAdapter;

export default Adapt;