// Rotas são definidas neste arquivo
Router.route('/', {
	seo: {
		title: 'Just Books - Usuários'
	},
	waitOn: function() {
		return this.subscribe('books');
	},
	action: function() {
		Session.set('activeHomeNav', 'active');
		this.render('books');
	}
});

Router.route('/users', {
	seo: {
		title: 'Just Books - Usuários'
	},
	action: function() {
		Session.set('activeNav', 'users');
		this.render('users');
	}
});

Router.route('/newbook', {
	seo: {
		title: 'Just Books - Cadastro novo livro'
	},
	waitOn: function() {
		return this.subscribe('books');
	},
	action: function() {
		Session.set('activeNav', 'newbook');
		this.render('newbook');
	}
});

Router.route('/listbooks', {
	seo: {
		title: 'Just Books - Todos os Livros'
	},
	waitOn: function() {
		return this.subscribe('books');
	},
	action: function() {
		Session.set('activeNav', 'listbooks');
			this.render('listBooks');
	}
});
