import Ember from 'ember';

export default Ember.Mixin.create({
  group: null,
  ungroupedContent: null,
  getHighlights: null,
  groupedContent: (function() {
    
    var groupCallback, groupedContent, model, ungroupedContent, getHighlights;

    model = this;

    groupedContent = Ember.A([]);

    groupCallback = this.get('group');
 
    ungroupedContent = this.get('ungroupedContent');

    getHighlights = this.get('getHighlights');

    ungroupedContent.forEach(function(item) {

      if (getHighlights && !item.get('highlight')) {
        return;
      }
      
      var foundGroup, group, groupKey;
      group = groupCallback.call(model, item);

      if (!(groupKey = group.get('key'))) {
        return;
      }
      
      foundGroup = groupedContent.findProperty('group.key', groupKey);
      
      if (!foundGroup) {
        foundGroup = groupedContent.pushObject(Ember.ArrayProxy.create({
          group: group,
          content: Ember.A([])
        }));
      }

      return foundGroup.get('content').pushObject(item);
    });
    
    return groupedContent;
  }).property('group', 'ungroupedContent.@each', 'getHighlights')
});