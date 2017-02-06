Template.newbook.rendered = function() {
	var user = Meteor.user();
  if (user && user.emails ) {
		var creatorID = user.emails[0].address;
	}
	$('#insertBookForm input[name="creatorID"]').val(creatorID);
	$('#insertBookForm input[name="status"]').val('enable');
},

Template.newbook.events({
	'keyup input[name="title"]' : function(e){
		var _inputSearch = $('input[name="title"]')
		,   _searchVal = _inputSearch.val()
		,   _insertBookForm = $('#insertBookForm')
		,  _btnImport = $("#btnImport");
		if(_searchVal.length > 3){
			_insertBookForm.removeClass('disable');
			_btnImport.removeClass('disabled');
		}else{
			_btnImport.addClass('disabled');
		}
	},
	'click .importBook:not(.disabled)' : function(){
		var _inputSearchTitle = $('input[name="title"]')
		,   _inputSearchAuthor = $('input[name="author"]')
		,   _searchValTitle = _inputSearchTitle.val()
		    _searchValAuthor = _inputSearchAuthor.val()
		,   _insertBookForm = $('#insertBookForm')
		,   inauthor = _searchValAuthor.length ? '+inauthor:'+_searchValAuthor : false;
		_insertBookForm.removeClass('disable');
		bookLib.openModal();
		$.getJSON('https://www.googleapis.com/books/v1/volumes?q='+_searchValTitle+''+(inauthor ? inauthor : "")+'&orderBy=relevance&maxResults=5',function(resp){
			if(resp.items){
				var content = [];
				for (var i in resp.items) {
					content.push(bookLib.formatJSON(resp.items[i]));
				}
			}
			bookLib.contentModal(content);
		});
	},
	'submit #insertBookForm': function (event) {
		$('#insertBookForm textarea').text('');
		Materialize.toast('Livro cadastrado com sucesso!', 3000, '', function(){
			url = document.URL.split('newbook')[0];
			window.location.href = url;
		});
	}
});
var bookLib = bookLib || {};
(function(){
	function formatJSON (respJSON){
		if(typeof respJSON == 'object'){
			var JSONformated = {};
			var book = respJSON.volumeInfo;
			if(book.authors && book.authors[0]){
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
	};

	function contentModal(content){
		$('#selectBook').remove();
		var html = '<div id=selectBook><ul>';
		for (var i in content) {
			var imageBook = content[i].image;
			delete content[i].image;
		  var bookInfos = JSON.stringify(content[i]);
			html += "<li data-image='"+imageBook+"' data-book='"+bookInfos+"'>"+content[i].title+" - "+content[i].author+" <a class='waves-effect waves-light btn-small getBook'>Importar</a></li>";
		}
		html+="</ul></div>"
		$('#modal1 .preloader-wrapper').removeClass('active');
		$('#modal1 .modal-content h4').after(html);
		$('#modal1').on('click','.getBook', function(){
			var bookSelected = $(this).parents('li').attr('data-book')
			,   imgBookSelected = $(this).parents('li').attr('data-image')
			,   params = JSON.parse(bookSelected);
			params.image = imgBookSelected;
			importBook(params);
			$('#modal1').closeModal();
		});
	};

	function importBook(resp){
		var _insertBookForm = $('#insertBookForm');
		$('input[name="title"]',_insertBookForm).val(resp.title);
		$('input[name="author"]',_insertBookForm).val(resp.author);
		$('input[name="pages"]',_insertBookForm).val(resp.pages);
		$('input[name="isbn"]',_insertBookForm).val(resp.isbn);
		$('input[name="image"]',_insertBookForm).val(resp.image);
		$('input[name="publisher"]',_insertBookForm).val(resp.publisher);
		$('input[name="language"]',_insertBookForm).val(resp.language);
		$('textarea[name="description"]',_insertBookForm).text(resp.description);
	}

	function openModal(content){
		$('#modal1').openModal();
	};

	bookLib = {
		'formatJSON': formatJSON,
		'openModal': openModal,
		'contentModal': contentModal
	};

})();
