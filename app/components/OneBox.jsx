import React, { Component } from 'react';

class OneBox extends Component {
  render() {
    return(
      <div className="onebox">
        <ul className="list-unstyled box-content">
          <li className="repo-name">
            <a href={this.props.data.html_url}>{this.props.data.name}</a>
          </li>
          <li className="repo-star">
            <a>Stars</a>
            <span>{this.props.data.stargazers_count}</span>
          </li>
          <li className="repo-watches">
            <a>Watches</a>
            <span>{this.props.data.watchers_count}</span>
          </li>
        </ul>
        <hr/>
        <p>{this.props.data.description || "No description yet!!"}</p>
      </div>
    )
  }
}

export default OneBox
