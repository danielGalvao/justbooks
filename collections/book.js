Books = new Mongo.Collection("books");
Books.attachSchema(new SimpleSchema({
  titulo: {
    type: String,
    label: "Título"
  },
  autor: {
    type: String,
    label: "Autor"
  },
  paginas: {
    type: Number,
    label: "Número de páginas"
  },
  imagem: {
    type: String,
    label: "Capa do livro"
  },
  descricao: {
    type: String,
    label: "Descrição"
  },
  isbn: {
    type: Number,
    label: "ISBN"
  },
  editora: {
    type: String,
    label: "Editora"
  },
  lingua: {
    type: String,
    label: "Língua"
  }
}));

Books.allow({
  insert: function () { return true; },
  update: function () { return true; },
  remove: function () { return true; }
});