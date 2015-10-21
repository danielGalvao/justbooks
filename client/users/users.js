Meteor.subscribe('usuarios');
// 	 code only runs on the client
Template.users.helpers({
	
	//retornar os candidatos
	users: function () {
		return Users.find({}, {sort: {createdAt: -1}});
	},

});

Template.users.events({
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
});
