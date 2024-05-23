import asyncHandler from 'express-async-handler'
import CommentModel from '../models/commentModel.js'

const getComments = asyncHandler(async (req, res) => {
  const comments = await CommentModel.find()
  res.status(200).json(comments)
})
const getCommentById = asyncHandler(async (req, res) => {
  const comment = await CommentModel.findById(req.params.id)

  if (!comment) {
    throw new Error('There is no comment with id ' + req.params.id)
  } else {
    res.status(200).json(comment)
  }
})

const createComment = asyncHandler(async (req, res) => {
  const { email, name, comment, blogId } = req.body
  if (!email || !name || !comment || !blogId) {
    res.status(400)
    throw new Error('Please add all fields')
  }
  // const userComment = await CommentModel.findById(req.params.id)
  const userComment = await CommentModel.create({
    email,
    name,
    comment,
    blogId,
  })
  if (!userComment) {
    res.status(400)
    throw new Error('Invalid user comment')
  }
  res.status(200).json({ userComment })
})

const updateComment = asyncHandler(async (req, res) => {
  const { name, comment, blogId } = req.body
  if (!name || !comment || !blogId) {
    res.status(400)
    throw new Error('Please add all fields')
  }
  // TODO : Need to fix 
  const userComment = await CommentModel.findById(req.params.id)

  if (!userComment) {
    res.status(400)
    throw new Error('Invalid Comment Data')
  } else {
    userComment.email = email
    userComment.name = name
    userComment.comment = comment
    userComment.blogId = blogId
    const updatedComment = await userComment.save()
    res.status(201).json(updatedComment)
  }
})

const deleteComment = asyncHandler(async (req, res) => {
  const blog = await CommentModel.findById(req.params.id)

  if (blog) {
    await CommentModel.findByIdAndDelete(req.params.id)
    res.json({ messsage: 'Removed' })
  } else {
    res.status(404)
    throw new Error('Not Found')
  }
})

export {
  createComment,
  getComments,
  getCommentById,
  updateComment,
  deleteComment,
}
