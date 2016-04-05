Users = new Mongo.Collection("Users");
Users.attachSchema(new SimpleSchema({
  Name: {
    type: String,
    label: "Nome"
  },
  email: {
    type: String,
    label: "E-mail"
  },
  password: {
    type: String,
    label: "Senha",
  }
}));

Users.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});
