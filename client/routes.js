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
	name: 'top books',
	action: function () {
		this.render('books');
	}
});

Router.route('/newbook', {
	name: 'new book',
	action: function () {
		this.render('newbook');
	}
});

Router.route('/listbooks', {
	name: 'list books',
	action: function () {
		this.render('listbooks');
	}
});
