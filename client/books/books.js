Template.books.helpers({
	// Retornar os livros salvos no banco
	books: function() {
		return Books.find({}, {sort: {createdAt: -1}, title: 1});
	},
});
Template.navbar.helpers({
	activeMenu: function(path){
		if(Router.current().route.getName() == path){
			return "active"
		}
	}
});
