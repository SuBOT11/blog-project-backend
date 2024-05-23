import express from 'express'
const router = express.Router()
import {
  createAuthor,
  getAuthor,
  getAuthorById,
  updateAuthor,
  deleteAuthor,
} from '../controller/authorController.js'

// get method returns author object
// post method saves author object
router.route('/').get(getAuthor).post(createAuthor)
// delete method deletes author object by id
// update method updates author object by id
// get method returns author object by id
router.route('/:id').get(getAuthorById).put(updateAuthor).delete(deleteAuthor)

export default router
