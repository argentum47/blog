import React from 'react';
import UserImage from './UserImage';

export default React.createClass({
  render: function() {
    return (
      <p>
        <UserImage width="150" height="150" />
        I am a web developer, innovator, derivative thinker.<br/>
        I like to simplify complex thing.
      </p>
    )
  }
});
