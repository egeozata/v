const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Book = new Schema(
  {
    title: {
      type: String,
      required: true
    },
    author: {
      type: String,
      required: true
    },
    price: {
      type: String,
      required: true
    },
    ISBN: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)

module.exports = mongoose.model('Book', Book);