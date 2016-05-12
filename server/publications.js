Meteor.publish('books',function () {
  return Books.find();
});
Meteor.publish(null, function() {
    CurrentUserId = this.userId;
});
