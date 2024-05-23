import mongoose from 'mongoose'

const commentSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: false,
    },
    name: {
      type: String,
      required: true,
    },
    comment: {
      type: String,
      required: true,
    },
    blogId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'Blog',
    },
  },
  { timestamps: true }
)

const Comment = mongoose.model('Comment', commentSchema)
export default Comment
