Meteor.subscribe('usuarios');
Meteor.subscribe('livros');
// 	 code only runs on the client
Template.app.helpers({

	//retornar os livros salvos no banco
	books: function() {
		return Books.find({}, {sort: {createdAt: -1}});
	},
	
	//retornar os candidatos
	users: function () {
		return Users.find({}, {sort: {createdAt: -1}});
	},

});

Template.app.events({
	// Submit de novo usuario
	"submit .new-user": function (event) {
		// Prevent default browser form submit
		event.preventDefault();

		// TODO: Pega valores dos elementos
	

		// Inserindo usuario
		Users.insert({
			nome: nome,
			email: email,
			celular: celular,
			createdAt: new Date()
		});

	},
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
