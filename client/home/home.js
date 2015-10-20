// Setande valor default de uma sessão:
Session.setDefault('click', 0);

Template.home.helpers({
	// Exemplo de helper
	hello: function () {
		var test = "I'm working";
		return test;
	},
	counter: function () {
		return Session.get('click');
	}
});

Template.home.events({
	// Exemplo de click
	// Ação seguida pelo elemento:
	'click button': function (event, template) {
		// Dentro do event temos o evento padrão do javascript
		// Dentro do template temos tudo que esta dentro do template, no caso o 'home'
		var counter = Session.get('click');
		Session.set('click', counter + 1);
	}
});