Maildog.Views.Search = Backbone.View.extend({
	template: JST['search'],

	initialize: function () {
		this.collection.pageNum = 1;
		this.listenTo(this.collection, "sync", this.render);
	},

	render: function () {
		var content = this.template({
			results: this.searchResults
		});
		this.$el.html(content);
		return this;
	},

	search: function (e) {
		e.preventDefault();
		this.searchResults.pageNum = 1;
		this.searchResults.query = this.$(".query").val();

		this.searchResults.fetch({
			data: {
				query: this.searchResults.query,
				page: 1
			}
		});
	},

	nextPage: function (event) {
		this.searchResults.fetch({
			data: {
				query: this.searchResults.query,
				page: this.searchResults.pageNum + 1
			},
			success: function () {
				this.searchResults.pageNum = this.searchResults.pageNum + 1;
			}.bind(this)
		});
	}
});
