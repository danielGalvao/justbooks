Meteor.publish('books',function () {
  return Books.find();
});
Meteor.publish('users',function () {
  return Users.find();
});
Meteor.publish(null, function() {
    CurrentUserId = this.userId;
});
