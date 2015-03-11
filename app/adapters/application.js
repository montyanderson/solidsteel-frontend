import DS from 'ember-data';
import ENV from '../config/environment';

if( ENV.environment === 'production') {
  var Adapt = DS.ActiveModelAdapter.extend({
  	namespace: 'api/v1',
  	host: "http://178.62.62.19"
  });
} else {
  var Adapt = DS.ActiveModelAdapter.extend({
  	namespace: 'api/v1',
  	host: "http://localhost:3001"
  });
}

//var Adapt =  DS.FixtureAdapter;

export default Adapt;