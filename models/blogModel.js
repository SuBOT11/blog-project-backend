import mongoose from 'mongoose'

const blogSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    co_Author: {
      type: String,
      required: false,
    },
    likes_count: {
      type: Number,
      required: false,
      default: 0,
    },
    view_count: {
      type: Number,
      required: false,
      default: 0,
    },
  },
  { timestamps: true }
)

export const BlogModel = mongoose.model('Blog', blogSchema)
