Template.newbook.events({
	'keyup input[name="title"]' : function(e){
		var _inputSearch = $('input[name="title"]')
		,   _searchVal = _inputSearch.val()
		,   _insertBookForm = $('#insertBookForm');
		if(_searchVal.length > 3){
			_insertBookForm.removeClass('disable');
		}
	},
	'click .importBook' : function(){
		var _inputSearch = $('input[name="title"]')
		,   _searchVal = _inputSearch.val()
		,   _insertBookForm = $('#insertBookForm');
		$.getJSON('https://www.googleapis.com/books/v1/volumes?q=title+'+_searchVal,function(resp){
			console.log(resp);
			var resp = bookFormat.formatJSON(resp.items[0])
			$('input[name="title"]',_insertBookForm).val(resp.title);
			$('input[name="author"]',_insertBookForm).val(resp.author);
			$('input[name="pages"]',_insertBookForm).val(resp.pages);
			$('input[name="isbn"]',_insertBookForm).val(resp.isbn);
			$('input[name="image"]',_insertBookForm).val(resp.image);
			$('input[name="publisher"]',_insertBookForm).val(resp.publisher);
			$('input[name="language"]',_insertBookForm).val(resp.language);
			$('textarea[name="description"]',_insertBookForm).text(resp.description);
		});
	},
	'click li' : function(event, template){
		var bkSelected = JSON.parse(event.currentTarget.attributes[0].nodeValue)


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
			var JSONformated = {};
			var book = respJSON.volumeInfo;
			if(book.authors[0]){
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
			JSONformated = {
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
		return JSONformated;
	}

	bookFormat.formatJSON = formatJSON;
})();
