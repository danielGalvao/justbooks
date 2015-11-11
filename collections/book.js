Books = new Mongo.Collection("books");
Books.attachSchema(new SimpleSchema({
  titulo: {
    type: String,
    label: "Título",
    max: 200
  },
  autor: {
    type: String,
    label: "Autor"
  },
  paginas: {
    type: Number,
    label: "Número de páginas",
    min: 0
  }
}));