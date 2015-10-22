// Rotas são definidas neste arquivo
Router.route('/', {
	seo: {
		title: 'Home'
	},
	action: function() {
		this.render('home');
	}
});
Router.route('/users', {
	seo: {
		title: 'Users'
	},
	action: function() {
		this.render('users');
	}
});
Router.route('/books', {
	seo: {
		title: 'Books'
	},
	action: function() {
		this.render('books');
	}
});