Template.listBooks.helpers({
	// Retornar os livros salvos no banco
	books: function() {
		return Books.find({}, {sort: {createdAt: -1}});
	},
});
Template.eachBook.events({
	'click .bookDesc' : function(){
		$(".card[data-bk="+this._id+"] .card-reavel").addClass('active');
	},
	'click .closeDesc' : function(){
		$(".card[data-bk="+this._id+"] .card-reavel").removeClass('active');
	},
	'click .removeBook' : function () {
		if (confirm('Tem certeza que deseja remover esse livro?')) {
				Books.remove(this._id);
		}
  }
});
