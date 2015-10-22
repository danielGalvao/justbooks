/* Crie regras e collections neste arquivo */
/* EX:
	-Criando collection
	var Test = new Mongo.Collection('test');

	-Regra da collection
	Text.allow({
		insert: function () {
			return true;
		}
	});

	Text.deny({
		update: function () {
			return true;
		}
	});
*/
Users = new Mongo.Collection("Users");
Books = new Mongo.Collection("Books");