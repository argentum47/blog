import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
    return(
      <div className="everything">
        <nav className="sidebar">
          <Link to="/" className="brand">Ag</Link>
          <div className="nav-tabs">
            <Link to="/about">About</Link>
            <span className="seperator"></span>
            <Link to="/blogs">Blogs</Link>
            <span className="seperator"></span>
          </div>
        </nav>
        <section className="container"> {this.props.children} </section>
      </div>
    );
  }
});
