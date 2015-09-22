import React, { Component } from 'react';
import { Router, Route } from 'react-router';
import { Provider } from 'react-redux';

import About from './About';
import Blogs from './Blogs';
import App from './App';

import store from '../reduxStore';

class Root extends Component {
  render() {
    return (
      <Provider store={store}>
      {() =>
        <Router>
          <Route path="/" component={App}>
            <Route path="about" component={About}/>
            <Route path="blogs" component={Blogs} />
          </Route>
        </Router>
      }
      </Provider>
    );
  }
}

export default Root;
