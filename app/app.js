import Ember from 'ember';
import Resolver from 'ember/resolver';
import loadInitializers from 'ember/load-initializers';
import config from './config/environment';

Ember.MODEL_FACTORY_INJECTIONS = true;

var App = Ember.Application.extend({
  modulePrefix: config.modulePrefix,
  podModulePrefix: config.podModulePrefix,
  Resolver: Resolver
});

SC.initialize({
	client_id: 'ab4a60b41abdd45663bc085f22134d4f'
});

var inflector = Ember.Inflector.inflector;
inflector.uncountable('search'); //only makes call to /advice

loadInitializers(App, config.modulePrefix);

export default App;
