import Ember from 'ember';

export function breakLines(text){
    //text = Ember.Handlebars.Utils.escapeExpression(text);
    text = text.replace(/(\r\n|\n|\r)/gm, '<br>');
    return new Ember.Handlebars.SafeString(text);
}
    
export default Ember.Handlebars.makeBoundHelper(breakLines);
