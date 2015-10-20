// Rotas são definidas neste arquivo

Router.route('/', {
	name: 'home',
	action: function () {
		this.render('home');
	}
});