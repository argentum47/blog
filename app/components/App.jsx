import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render: function() {
    return(
      <div className="everything">
        <nav ref="navbar" className="navbar">
          <p><Link to="/" className="brand">AG</Link></p>
          <ul className="nav-tabs list-inline">
            <li><Link to="/about">About</Link></li>
            <li><Link to="/blogs">Blogs</Link></li>
            <li><Link to="/work">Projects</Link></li>
          </ul>
        </nav>
        <section className="container">{this.props.children}</section>
      </div>
    );
  }
});
