Books = new Mongo.Collection("books");
Books.attachSchema(new SimpleSchema({
  title: {
    type: String,
    label: "Título"
  },
  author: {
    type: String,
    label: "Autor"
  },
  pages: {
    type: Number,
    label: "Número de páginas",
    optional: true
  },
  image: {
    type: String,
    label: "Capa do livro",
    optional: true
  },
  isbn: {
    type: Number,
    label: "ISBN",
    optional: true
  },
  publisher: {
    type: String,
    label: "Editora",
    optional: true
  },
  language: {
    type: String,
    label: "Língua",
    optional: true
  },
  description: {
    type: String,
    label: "Descrição",
    max: 2000,
    optional: true,
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 10
      }
    }
  },
  creatorID: {
    type: String,
    autoform: {
        type: "hidden",
        label: false
    },
    autoValue: function () { return Meteor.user().emails[0].address },
  }
}));

Books.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});
