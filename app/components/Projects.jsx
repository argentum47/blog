import React, { Component } from 'react';
import OneBox from './OneBox';
import fetch from '../ajax';

const URL = 'https://api.github.com/users/argentum47/repos';

class Projects extends Component {
  constructor() {
    super();
    this.state = {repos: []}
  }

  componentDidMount() {
    fetch(URL).then(repos =>this.setState({ repos: JSON.parse(repos.responseText) }))
  }

  render() {
    return(
      <div className='work'>
        {this.state.repos.map((repo, i) => <OneBox data={repo} key={i}/>)}
      </div>
    )
  }
}

export default Projects;
