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
		if (confirm('Deseja remover esse livro?')) {
				Books.remove(this._id);
		}
  },
	'click .getBook' : function () {
		if (confirm('Deseja pegar emprestado esse livro?')) {
				listBooks.requestBook(this);
		}
  },
	'click .enableBook' : function () {
		if (confirm('Deseja retornar esse livro?')) {
				listBooks.returnBook(this);
		}
  }
});

var listBooks = listBooks || {};
(function(){

	function requestBook(book){
		var requestedBy = Meteor.user().emails[0].address;
		Books.update({'_id': book._id},{$set: {'status': 'disable', 'requestedBy': requestedBy}});
	};

	function returnBook(book){
		var requestedBy = '';
		Books.update({'_id': book._id},{$set: {'status': 'enable', 'requestedBy': requestedBy}});
	};

	listBooks = {
		'requestBook': requestBook,
		'returnBook': returnBook
	};
})();
