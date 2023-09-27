const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Category = require("./Category");

/**
 * Project Schema for a portfolio graphic design
 */

const projectSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (v) {
        return v.length > 0;
      },
      message: "The title field is required.",
    },
  },
  description: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (v) {
        return v.length > 0;
      },
      message: "The description field is required.",
    },
  },
  year: {
    type: Number,
    required: true,
    trim: true,
    validate: {
      validator: function (v) {
        return v.length > 0;
      },
      message: "The year field is required.",
    },
  },
  author: {
    type: String,
    required: true,
    trim: true,
    validate: {
      validator: function (v) {
        return v.length > 0;
      },
      message: "The author field is required.",
    },
  },
  coverCollage: {
    type: String,
    required: false,
    trim: true,
  },
  paper: {
    type: String,
    required: false,
    trim: true,
  },
  print: {
    type: String,
    required: false,
    trim: true,
  },
  images: {
    type: Array,
    required: true,
    validate: {
      validator: function (v) {
        return v.length > 0;
      },
      message: "The images field is required.",
    },
  },
  link: {
    type: String,
    required: false,
    trim: true,
  },
  tags: {
    type: Array,
    required: true,
    trim: true,
    validate: {
      validator: function (v) {
        return v.length > 0;
      },
      message: "The tags field is required.",
    },
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true,
  },
});

module.exports = mongoose.model("Project", projectSchema);
