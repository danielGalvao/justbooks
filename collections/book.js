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
    label: "Número de páginas"
  },
  image: {
    type: String,
    label: "Capa do livro"
  },
  isbn: {
    type: Number,
    label: "ISBN"
  },
  editora: {
    type: String,
    label: "Editora"
  },
  language: {
    type: String,
    label: "Língua"
  },
  description: {
    type: String,
    label: "Descrição",
    max: 2000,
    autoform: {
      afFieldInput: {
        type: "textarea",
        rows: 10,
        class: "foo"
      }
    }
  }
}));

Books.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});