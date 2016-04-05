Template.users.helpers({

	//retornar os candidatos
	users: function () {
		return Users.find({}, {sort: {createdAt: -1}});
	},

});

Template.users.events({
	// Submit de novo usuario
	"submit .new-user": function (event) {
		event.preventDefault();
		Users.insert({
			nome: nome,
			email: email,
			celular: celular,
			createdAt: new Date()
		});

	},
});
