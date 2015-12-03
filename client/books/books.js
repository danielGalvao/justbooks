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
				var resp = bookFormat.formatJSON(resp.items)
				,   HTMLBooks = bookFormat.buildHTML(resp);
				// TODO: Add HTMLBooks DOM
			});
		}
  }

});
var bookFormat = bookFormat || {};
(function(){
	function formatJSON (respJSON){
		if(typeof respJSON == 'object'){
			var JSONformated = [];
			for (var i in respJSON) {
				var book = respJSON[i].volumeInfo;
				JSONformated[i] = {
					title:       book.title,
					author:      book.authors ? book.authors[0] : undefined,
					pages:       book.pageCount,
					image:       book.imageLinks ? book.imageLinks.smallThumbnail : undefined,
					publisher:   book.publisher,
					language:    book.language,
					description: book.description,
					isbn:        book.industryIdentifiers && book.industryIdentifiers[1] ? book.industryIdentifiers[1].identifier : undefined
				};
			}
		}
		return JSONformated;
	}
	function buildHTML(books){
		//TODO: Build HTML
	}

	bookFormat.formatJSON = formatJSON;
	bookFormat.buildHTML  = buildHTML;
})();
