import DS from 'ember-data';
import ENV from '../config/environment';

var Adapt = DS.ActiveModelAdapter.extend({
	namespace: 'api/v1',
	host: ENV.APP.API_HOST
});

//var Adapt =  DS.FixtureAdapter;

export default Adapt;