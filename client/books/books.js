// 	 code only runs on the client
Template.books.helpers({
	//retornar os livros salvos no banco
	books: function() {
		return Books.find({}, {sort: {createdAt: -1}});
	},
});
Template.newbook.events({
	'keyup input[name="title"]' : function(e){
		clearTimeout(requestBooks);
		var _inputSearch = $('input[name="title"]')
		,   _searchVal = _inputSearch.val()
		,   _insertBookForm = $('#insertBookForm')
		,   requestBooks = false;
		if(_searchVal.length > 3){
			requestBooks = setTimeout(function(){
				$.getJSON('https://www.googleapis.com/books/v1/volumes?q=title+'+_searchVal,function(resp){
					var resp = bookFormat.formatJSON(resp.items)
					,   HTMLBooks = bookFormat.buildHTML(resp);
					$('ul',_insertBookForm).remove();
					_inputSearch.after(HTMLBooks);
				});
			},3000);
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
		console.log(books);
		var html = '<ul>';
		for (var i in books) {
			html+=
				'<li>'
					+'<b>'+books[i].title+' - </b>'
					+'<span>'+books[i].author+'</span>';
				+'</li>';
		}
		html += '</ul>';
		return html;
	}

	bookFormat.formatJSON = formatJSON;
	bookFormat.buildHTML  = buildHTML;
})();
