const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Author = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    country: {
      type: String,
      required: true
    },
    birthDate: {
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

module.exports = mongoose.model('Author', Author);

