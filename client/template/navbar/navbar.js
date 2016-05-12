Template.navbar.helpers({
	activeMenu: function(path){
		if(Router.current().route.getName() == path){
			return "active"
		}
	}
});

Template.navbar.rendered = function () {
	$(".button-collapse").sideNav();
};
