const mongoose = require("mongoose");

const BlogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true, minLength: 5 },
    text: { type: String, required: true, trim: true, minLength: 5 },
    show: { type: Boolean, default: false },
    bookmarks: { type: [String], default: [] },
    likes: { type: Number, default: 0 },
  },
  {
    timestamps: true,
  }
);

const BlogModel = mongoose.model("Blog", BlogSchema);

module.exports = BlogModel;
