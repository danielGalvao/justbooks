// 	 code only runs on the client
Template.books.helpers({
	//retornar os livros salvos no banco
	books: function() {
		return Books.find({}, {sort: {createdAt: -1}});
	},
});
Template.newbook.events({
	'keyup input[name="title"]' : function(e){
		var _search = $('input[name="title"]').val();
		if(_search.length && _search.length%3 === 0){
			$.getJSON('https://www.googleapis.com/books/v1/volumes?q=title+'+_search,function(resp){
				console.log(resp);
			});
		}
  }

});
var JSONBook = JSONBook || {}
(function(JSONBook){

})();
