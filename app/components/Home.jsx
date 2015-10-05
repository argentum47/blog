import React from 'react';
import UserImage from './UserImage';

export default React.createClass({
  render: function() {
    return (
      <article className="about-me">
        <UserImage width="150" height="150" />
        <p>
          a web developer,<br/>
          innovator,<br/>
          derivative thinker,<br/>
          likes to simplify complex thing.
        </p>
      </article>
    )
  }
});
