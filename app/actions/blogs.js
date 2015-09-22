import {GET_BLOGS, GET_BLOG, CREATE_BLOG} from '../constants/blog';
import BlogApi from '../api/Blog';

export function addBlog(title, content) {
  return {
    type: CREATE_BLOG,
    payload: BlogApi.create(title, content)
   }
}

export function getBlog(id) {
  return {
    type: GET_BLOG,
    payload: BlogApi.find(id)
   }
}

export function getAllBlogs() {
  return {
    type: GET_BLOGS,
    payload: BlogApi.all()
   }
}
