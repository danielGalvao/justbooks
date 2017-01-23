Template.users.helpers({
	// Listing users
	users: function () {
		return Users.find({}, {sort: {createdAt: -1}});
	},

	getUser: function(userID) {
		var user = Users.find({ "_id": userID})
		return user;
	}

});

Template.users.events({
	// Submit new users
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
