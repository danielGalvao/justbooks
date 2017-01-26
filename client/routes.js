// Rotas são definidas neste arquivo
Router.route('/', {
	seo: {
		title: 'Just Books - Usuários'
	},
	name: 'home',
	waitOn: function() {
		return this.subscribe('books');
	},
	action: function() {
		if (Meteor.user()) {
			this.render('listBooks');
		} else {
			this.render('notlogged');
		}
	}
});


Router.route('/newbook', {
	seo: {
		title: 'Just Books - Cadastro novo livro'
	},
	name: 'newbook',
	waitOn: function() {
		return this.subscribe('books');
	},
	action: function() {
		if (Meteor.user()) {
			this.render('newbook');
		} else {
			this.render('notlogged');
		}
	}
});

Router.route('/listbooks', {
	seo: {
		title: 'Just Books - Todos os Livros'
	},
	name: 'listbooks',
	waitOn: function() {
		return this.subscribe('books');
	},
	action: function() {
		if (Meteor.user()) {
			this.render('listBooks');
		} else {
			this.render('notlogged');
		}
	}
});
