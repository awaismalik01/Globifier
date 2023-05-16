const mongoose = require("mongoose");

const Schema = mongoose.Schema;

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
      data: Buffer,
      contentType: String,
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

    comments: {
      type: Number,
      required: true,
      default: 0,
    },

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
