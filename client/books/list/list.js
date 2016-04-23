Template.listBooks.helpers({
	// Retornar os livros salvos no banco
	books: function() {
		return Books.find({}, {sort: {createdAt: -1}});
	},
});
Template.eachBook.events({
	'click .bookDesc' : function(event, template){
		$(".card[data-bk="+this._id+"] .card-reavel").addClass('active');
	},
	'click .closeDesc' : function(event, template){
		$(".card[data-bk="+this._id+"] .card-reavel").removeClass('active');
	}
});
