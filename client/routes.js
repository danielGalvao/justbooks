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
		this.render('books');
	}
});

Router.route('/users', {
	seo: {
		title: 'Just Books - Usuários'
	},
	name: 'users',
	action: function() {
		this.render('users');
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
		this.render('newbook');
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
		this.render('listBooks');
	}
});
