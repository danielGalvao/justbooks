Users = new Meteor.Collection("Users");
Books = new Meteor.Collection("Books");

Users.allow({
 insert: function () {
 	return true;
 },
 update: function () {
 	return true;
 },
 remove: function () {
 	return true;
 }
});


Books.allow({
 insert: function () {
 	return true;
 },
 update: function () {
 	return true;
 },
 remove: function () {
 	return true;
 }
});