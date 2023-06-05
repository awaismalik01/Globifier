const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const commentSchema = new Schema({
  email: {
    type: String,
    required: true,
  },

  name: {
    type: String,
    required: true,
  },

  comment: {
    type: String,
    required: true,
  },

  date: {
    type: String,
    required: true,
  },
});

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    category: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    author: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    image: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
    },

    content: {
      type: String,
      required: true,
      trim: true,
      minlength: 10,
    },

    views: {
      type: Number,
      required: true,
      default: 0,
    },

    comments: [commentSchema],

    likes: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const Post = mongoose.model("Post", postSchema);

module.exports = Post;
