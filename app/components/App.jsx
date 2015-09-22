import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
    return(
      <div className="everything">
        <nav className="header">
          <Link to="/" className="main-header">beeellog</Link>
          <div className="nav-tabs">
            <Link to="/about">About</Link>
            <Link to="/blogs">Blogs</Link>
          </div>
        </nav>
        <section className="container"> {this.props.children} </section>
      </div>
    );
  }
});
