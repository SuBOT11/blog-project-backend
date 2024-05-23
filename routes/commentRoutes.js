import express from 'express'
const router = express.Router()
import {
  createComment,
  deleteComment,
  getCommentById,
  getComments,
  updateComment,
} from '../controller/commentController.js'

// get methods returns comments object
//post method returns comments object
router.route('/').post(createComment).get(getComments)
// get methods returns comments object by id
// delete method deletes comments object by id
// update method updates comments object by id
router
  .route('/:id')
  .put(updateComment)
  .get(getCommentById)
  .delete(deleteComment)

export default router
