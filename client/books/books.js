// 	 code only runs on the client
Template.listBooks.helpers({
	// Retornar os livros salvos no banco
	books: function() { 
		return Books.find({}, {sort: {createdAt: -1}});
	},
});
Template.newbook.events({
	'keyup input[name="title"]' : function(e){
		var _inputSearch = $('input[name="title"]')
		,   _searchVal = _inputSearch.val()
		,   _insertBookForm = $('#insertBookForm');
		if(_searchVal.length > 3){
			clearTimeout(requestBooks);
			requestBooks = setTimeout(function(){
				$.getJSON('https://www.googleapis.com/books/v1/volumes?q=title+'+_searchVal,function(resp){
					var resp = bookFormat.formatJSON(resp.items)
					,   HTMLBooks = bookFormat.buildHTML(resp);
					$('ul',_insertBookForm).remove();
					_inputSearch.after(HTMLBooks);
				});
			},1000);
		}
	},
	'click li' : function(event, template){
		var bkSelected = JSON.parse(event.currentTarget.attributes[0].nodeValue)
		,   _insertBookForm = $('#insertBookForm');
		$('ul',_insertBookForm).remove();
		$('input[name="title"]',_insertBookForm).val(bkSelected.title);
		$('input[name="author"]',_insertBookForm).val(bkSelected.author);
		$('input[name="pages"]',_insertBookForm).val(bkSelected.pages);
		$('input[name="isbn"]',_insertBookForm).val(bkSelected.isbn);
		$('input[name="image"]',_insertBookForm).val(bkSelected.image);
		$('input[name="publisher"]',_insertBookForm).val(bkSelected.publisher);
		$('input[name="language"]',_insertBookForm).val(bkSelected.language);
		$('textarea[name="description"]',_insertBookForm).text(bkSelected.description);
		_insertBookForm.removeClass('disable');
	},

	'submit #insertBookForm': function (event) {
		$('#insertBookForm textarea').text('');
		setTimeout(function(){
			event.target.className = "disable"
		},3000);
	}
});
var bookFormat = bookFormat || {}
,  requestBooks = null;
(function(){
	function formatJSON (respJSON){
		if(typeof respJSON == 'object'){
			var JSONformated = [];
			for (var i in respJSON) {
				var book = respJSON[i].volumeInfo;
				if(book.authors){
					var authors = book.authors[0].split('/');
					if(authors.length > 1){
						var names = authors[0].split(',')
						,   author = names[1]+' '+names[0];
					}else{
						var author = book.authors[0].split(',');
						if(author.length > 1){
							author = author[1]+' '+author[0];
						}else{
							author = author[0];
						}
					}
				}else{
					authors = undefined;
				}
				JSONformated[i] = {
					title:       book.title,
					author:      author,
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
		var html = '<ul>'
		,   bk = books;
		for (var i in bk) {
			html+=
				"<li data-bk='"+JSON.stringify(bk[i])+"'>"
					+"<b>"+bk[i].title+" - </b>"
					+"<span>"+bk[i].author+"</span>";
				+"</li>";
		}
		html += '</ul>';
		return html;
	}

	bookFormat.formatJSON = formatJSON;
	bookFormat.buildHTML  = buildHTML;
})();
