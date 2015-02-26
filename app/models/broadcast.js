import DS from 'ember-data';

export default DS.Model.extend({
  session_name: DS.attr('string'),
  broadcast_date: DS.attr('date'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  mixes: DS.hasMany('mix')
});