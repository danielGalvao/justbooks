Meteor.methods({
	/* Todos os metodos ficarão neste arquivo. */
	/* Methods são funcções que rodarão no lado do servidor. */
	/* Ex: funções de segurança, roles, deletar itens do banco e etc. */
	'testMethod': function () {
		var x = 'y';
		if (x === 'y') {
			return x;
		}
	}
});