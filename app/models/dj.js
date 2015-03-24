import DS from 'ember-data';

var Dj = DS.Model.extend({
  name: DS.attr(),
  count: DS.attr()
});

export default Dj;