Template.books.helpers({
	// Retornar os livros salvos no banco
	books: function() {
		return Books.find({}, {sort: {createdAt: -1}, title: 1});
	},
});
