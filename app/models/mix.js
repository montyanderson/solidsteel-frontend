import DS from 'ember-data';

var Mix = DS.Model.extend({
  name: DS.attr(),
  part: DS.attr(),
  broadcast: DS.belongsTo('broadcast', { async: true}),
  tracks: DS.hasMany('track', { async: true})
});

Mix.reopenClass({FIXTURES : [
	{
		id: 1,
		name: "mix a",
		tracks: [1, 2, 3]
	},
	{
		id: 2,
		name: "mix b",
		tracks: [4, 5, 6]
	},
	{
		id: 3,
		name: "mix c",
		tracks: [7, 8, 9, 10]
	}
]})

export default Mix;