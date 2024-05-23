import mongoose from 'mongoose'

const authorSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
)

export const AuthorModel = mongoose.model('Author', authorSchema)
