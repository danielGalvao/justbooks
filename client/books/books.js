function getBooks(json){
	return new Promise(function(resolve, reject) { 

            let i = 0;
            console.log(json);

			// this.json.forEach(f =>

			// 	books = {title: title, isbn: isbn};
			// 	console.log(books);
			// 	i++;

			// );

            if (books) {
                resolve(books); // success
            } else {
                reject(false); // failure
            }

        }
    );
}



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
		if(_search.length>3){
			$.getJSON('https://www.googleapis.com/books/v1/volumes?q=title+'+_search,function(resp){
				let promise = getBooks(resp);

				    // We define what to do when the promise is resolved/fulfilled with the then() call,
				    // and the catch() method defines what to do if the promise is rejected.
				    promise.then(
				        // Log the fulfillment value
				        function(booksRes) {
				            console.log(booksRes)
				        })
				    .catch(
				        // Log the rejection reason
				        function(reason) {
				            console.log('Sem livros');
				        }
					);
			});
		}
  	}

});