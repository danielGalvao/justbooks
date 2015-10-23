// Rotas são definidas neste arquivo
Router.route('/', function() {
	this.render('home');
});
Router.route('/users', function() {
	this.render('users');
});
Router.route('/books', function() {
	this.render('books');
});