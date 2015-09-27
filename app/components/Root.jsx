import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';

import About from './About';
import Blogs from './Blogs';
import Projects from './Projects';
import App from './App';

import store from '../reduxStore';

//import CreateBlog from './CreateBlog';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
      {() =>
        <Router>
          <Route path="/" component={App}>
            <Route path="about" component={About}/>
            <Route path="blogs" component={Blogs}/>
            <Route path="work" component={Projects}/>
          </Route>
        </Router>
      }
      </Provider>
    );
  }
}

export default Root;
