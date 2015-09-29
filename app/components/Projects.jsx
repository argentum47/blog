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
    let repos = "loading..."
    repos = this.state.repos.map((repo, i) => <OneBox data={repo} key={i}/>)
    return(
      <div className='work'>
        {repos}
      </div>
    )
  }
}

export default Projects;
