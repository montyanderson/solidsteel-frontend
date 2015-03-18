import DS from 'ember-data';

var Broadcast = DS.Model.extend({
  session_name: DS.attr('string'),
  broadcast_date: DS.attr('date'),
  altnotes: DS.attr('string'),
  createdAt: DS.attr('date'),
  updatedAt: DS.attr('date'),
  image: DS.attr(),
  mixes: DS.hasMany('mix', { async: true})
});

Broadcast.reopenClass({FIXTURES : [
	{
		id: "latest",
		session_name: "latest session",
		mixes: [1, 2]
	},
	{
		id: 1,
		session_name: "broadcast a",
		mixes: [2, 3, 4, 5]
	},
	{
		id: 2,
		session_name: "broadcast b",
		mixes: [3, 2]
	},
	{
		id: 3,
		session_name: "broadcast c",
		mixes: [4, 2, 3]
	}
]});

export default Broadcast;