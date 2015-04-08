import DS from 'ember-data';

var Mix = DS.Model.extend({
  name: DS.attr(),
  part: DS.attr(),
  soundcloudId: DS.attr(),
  background_image: DS.attr(),
  mix_image: DS.attr(),
  broadcast: DS.belongsTo('broadcast', { async: true}),
  tracks: DS.hasMany('track', { async: true}),
  isCurrent: false,
  secret: DS.attr()
});

Mix.reopenClass({FIXTURES : [
	{
		id: 1,
		name: "mix a",
		tracks: [1, 2, 3],
		url: "293",
		img: "bonobo.jpg",
		synopsis: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
	},
	{
		id: 2,
		name: "mix b",
		tracks: [4, 5, 6],
		url: "293",
		img: "6d6d6d.gif"
	},
	{
		id: 3,
		name: "mix c",
		tracks: [7, 8, 9, 10],
		url: "293",
		img: "09f.gif"
	},
	{
		id: 4,
		name: "mix d",
		tracks: [3, 8, 9, 7],
		url: "293",
		img: "1440x900.gif"
	}	
]});

export default Mix;