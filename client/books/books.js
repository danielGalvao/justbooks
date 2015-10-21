Meteor.subscribe('livros');
// 	 code only runs on the client
Template.books.helpers({

	//retornar os livros salvos no banco
	books: function() {
		return Books.find({}, {sort: {createdAt: -1}});
	},
});

Template.books.events({
	// Submit de novo usuario
	"submit .new-book": function (event) {
		// Prevent default browser form submit
		event.preventDefault();

		// TODO: Pega valores dos elementos
	

		// Inserindo usuario
		Books.insert({
			nome: nome,
			autor: autor,
			paginas: paginas,
			status: status,
			capa: capa,
			createdAt: new Date()
		});

	},
});
