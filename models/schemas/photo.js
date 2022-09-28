const { Schema } = require("mongoose");

const PhotoSchema = new Schema({
  id: {
    type: Number,
  },
  photo: {
    type: String,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  description: {
    type: String,
  },
});

module.exports = PhotoSchema;
