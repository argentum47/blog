import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {getAllBlogs} from'../actions/blogs';
import Blog from './Blog';

class Blogs extends Component {
  componentWillMount() {
    this.props.dispatch(getAllBlogs())
  }

  render() {
    let blogsHtml = null;
    if(this.props.blogs) {
      blogsHtml = this.props.blogs.map( blog => <Blog blog={blog} key={blog.id}/> )
    }
    return (
      <div className="blog-container">
        <section className="blogs">
          { blogsHtml }
        </section>
        <Link to="/create">new blog</Link>
      </div>
    );
  }
}


function select(state) {
  let {blogs, entities} = state;
  return {
    blogs: blogs.map( blogId => entities.blogs[blogId] )
  }
}
export default connect(select)(Blogs);


// export default connect(state => {
//   blogposts: state.blogs
// })(Blog);
