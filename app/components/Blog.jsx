import React, { Component } from 'react';

export default class Blog extends Component {
  render() {
    let {blog} = this.props;
    return (
      <article>
        <h1>{blog.title}</h1>
        <p>{blog.content}</p>
      </article>
    )
  }
}
