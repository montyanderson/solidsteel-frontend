export default Ember.Mixin.create({
  group: null,
  ungroupedContent: null,
  groupedContent: (function() {
    
    var groupCallback, groupedContent, model, ungroupedContent;
    model = this;
    groupedContent = Ember.A([]);
    groupCallback = this.get('group');
    ungroupedContent = this.get('ungroupedContent');
    if (!groupCallback) {
      return groupedContent;
    }
    if (!ungroupedContent) {
      return groupedContent;
    }
    ungroupedContent.forEach(function(item) {
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
  }).property('group', 'ungroupedContent.@each')
});