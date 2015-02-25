import DS from 'ember-data';

export default DS.ActiveModelAdapter.extend({
  namespace: 'api/v1',
  host: 'http://0.0.0.0:3001'
});