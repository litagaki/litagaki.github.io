Maildog.Models.Label = Backbone.Model.extend({
  initialize: function(options) {
    this.urlRoot = (options && options.urlRoot) ? options.urlRoot : "/api/labels"
  },

  toJSON: function(){
    var json = { label: _.clone(this.attributes) };
    return json;
  }
});
