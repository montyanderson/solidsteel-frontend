import Ember from 'ember';

export function twofigurecounter(integer) {
    integer++;
    if(integer <= 9) {
      return '0' + integer;
    } else {
      return integer;
    }
}

export default Ember.Handlebars.makeBoundHelper(twofigurecounter);
    