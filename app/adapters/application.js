import DS from 'ember-data';

var Adapt = DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  //host: 'http://178.62.62.19/'
  //host: 'http://localhost:3001/'
  host: window.MyNewApp.API_HOST
});

var Adapt =  DS.FixtureAdapter;

export default Adapt;