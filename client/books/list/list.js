Template.listBooks.helpers({
	// Listing books
	books: function() {
		return Books.find({}, {sort: {createdAt: -1}});
	}
});

Template.eachBook.helpers({
	// Verify book owner
	isMyBook: function(){
		var user = Meteor.users.findOne({'emails.address': {$regex:this.creatorID,$options:'i'}});
		return  user.emails[0].address == this.creatorID ? true : false;
	},
	bookOwner: function() {
		var user = Meteor.users.findOne({'emails.address': {$regex:this.creatorID,$options:'i'}});
		return user.emails[0].address;
	},
	isEnableBook: function() {
		return this.status == 'enable' ? true : false;
	},
	isDisableBook: function() {
		return this.status == 'disable' ? true : false;
	},
});

Template.eachBook.events({
	'click .bookDesc' : function(){
		$(".card[data-bk="+this._id+"] .card-reavel").addClass('active');
	},
	'click .closeDesc' : function(){
		$(".card[data-bk="+this._id+"] .card-reavel").removeClass('active');
	},
	'click .removeBook' : function () {
		if (confirm('Tem certeza que deseja remover esse livro?')) {
				Books.remove(this._id);
		}
  },
	'click .getBook' : function () {
		if (confirm('Tem certeza que deseja pegar emprestado esse livro?')) {
				listBooks.requestBook(this);
		}
  }
});

var listBooks = listBooks || {};
(function(){
	function requestBook(book){
		book.status = 'disable';
		book.requestedBy = Meteor.user().emails[0].address;
		bookId = book._id;
		Books.remove(bookId);
		setTimeout(function(){
			Books.insert(book);
		},1000);
	};
	listBooks = {
		'requestBook': requestBook
	};
})();
