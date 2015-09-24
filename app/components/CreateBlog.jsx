import React, { Component } from 'react';
import {connect} from 'react-redux';
import {addBlog} from '../actions/blogs';

class CreateBlog extends Component{
  constructor(props, state) {
    super(props, state)
    this.submitBlog = this.submitBlog.bind(this)
  }
  
  submitBlog(e) {
    e.preventDefault();
    let title = React.findDOMNode(this.refs.title).value;
    let content = React.findDOMNode(this.refs.content).value;
    this.props.dispatch(addBlog(title, content))
  }

  render() {
    return(
      <form className="create-blog-form" onSubmit={this.submitBlog}>
        <input type="text" ref="title"/><br/>
        <textarea className="blog-content" ref="content"/><br/>
        <input type="submit" value="Post Blog" className="create-blog"/>
      </form>
    )
  }
}

export default connect()(CreateBlog);
