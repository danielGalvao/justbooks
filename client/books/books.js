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
				var resp = JSONBook.format(resp);
				for (var i in resp) {
					if (i > 2) break;
					// TODO: HTML para montar os 3 livros
				}
			});
		}
  }

});
var JSONBook = JSONBook || {};
(function(){
	var format = function(respJSON){
		// TODO: formatar JSON para obter apenas infos necessárias
	}
})();
