// Rotas são definidas neste arquivo
Router.route('/', {
	name: 'home',
	action: function () {
		this.render('home');
	}
});

Router.route('/users', {
	name: 'users',
	action: function () {
		this.render('users');
	}
});

Router.route('/books', {
	name: 'books',
	action: function () {
		this.render('books');
	}
});

Router.route('/newbook', {
	name: 'newbook',
	action: function () {
		this.render('newbook');
	}
});