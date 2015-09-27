import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
    return(
      <div className="everything">
        <nav className="sidebar clearfix">
          <Link to="/" className="brand">AG</Link>
          <div className="nav-tabs">
            <Link to="/about">About</Link>
            <Link to="/blogs">Blogs</Link>
            <Link to="/work">Projects</Link>
          </div>
        </nav>
        <section className="container"> {this.props.children} </section>
      </div>
    );
  }
});
