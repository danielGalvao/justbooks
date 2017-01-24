Template.listBooks.helpers({
	// Listing books
	books: function() {
		return Books.find({}, {sort: {createdAt: -1}});
	}
});

Template.eachBook.helpers({
	// Verify book owner
	isMyBook: function(){
		return Meteor.userId() == this.creatorID ? true : false;
	},
	bookOwner: function() {
		var user = Meteor.users.findOne({'emails.address': {$regex:this.creatorID,$options:'i'}});
		console.log(user);
	}
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
  }
});
