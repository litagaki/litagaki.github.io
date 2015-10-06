Maildog.Collections.Labels = Backbone.Collection.extend({
  initialize: function(models, options) {
    this.url = (options && options.url) ? options.url : "api/labels"
    this.model = (options && options.model) ? options.model : Maildog.Models.Label
  }
});
