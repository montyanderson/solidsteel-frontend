import DS from 'ember-data';

var Track = DS.Model.extend({
  title: DS.attr('string'),
  artist: DS.attr('date'),
  mix: DS.belongsTo('mix', { async: true})
});

Track.reopenClass({FIXTURES : [
	{
		id: 1,
		title: "track a"
	},
	{
		id: 2,
		title: "track b"
	},
	{
		id: 3,
		title: "track c"
	},
	{
		id: 4,
		title: "track d"
	},
	{
		id: 5,
		title: "track e"
	},
	{
		id: 6,
		title: "track f"
	},
	{
		id: 7,
		title: "track g"
	},
	{
		id: 8,
		title: "track h"
	},
	{
		id: 9,
		title: "track i"
	},
	{
		id: 10,
		title: "track j"
	},
	{
		id: 11,
		title: "track k"
	}
]})

export default Track;