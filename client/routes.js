// Rotas são definidas neste arquivo
Router.route('/', {
	name: 'home',
	waitOn: function () {
		return this.subscribe('books');
	},
	action: function () {
		this.render('books');
	}
});

Router.route('/users', {
	name: 'users',
	action: function () {
		this.render('users');
	}
});

Router.route('/newbook', {
	name: 'new book',
	waitOn: function () {
		return this.subscribe('books');
	},
	action: function () {
		this.render('newbook');
	}
});

Router.route('/listbooks', {
	name: 'list books',
	waitOn: function () {
		return this.subscribe('books');
	},
	action: function () {
		this.render('listBooks');
	}
});
