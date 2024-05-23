import express from 'express'
const router = express.Router()
import {
  createBlog,
  getBlogById,
  getBlogs,
  likes_count_increase,
  likes_count_decrease,
  updateBlog,
  deleteBlog,
} from '../controller/blogController.js'

// get methods return blog object
// post method return blog object
router.route('/').get(getBlogs).post(createBlog)
// get methods incerease like count by blog Id
router.route('/likes/:id').get(likes_count_increase)
// get methods decreases like count by blog Id

router.route('/dislikes/:id').get(likes_count_decrease)
// get method return blog object by id
// delete method return blog object by id
// update method return blog object by id
router.route('/:id').get(getBlogById).put(updateBlog).delete(deleteBlog)

export default router
