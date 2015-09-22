import React, { Component } from 'react';
import { Router, Route, Link } from 'react-router';
import { combineReducers } from 'redux';
import { Provider } from 'react-redux';

import About from './About';
import Blog from './Blog';
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
            <Route path="blog" component={Blog} />
          </Route>
        </Router>
      }
      </Provider>
    );
  }
}

export default Root;
