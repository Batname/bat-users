import 'babel/polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, Link, Redirect } from 'react-router';
import BrowserHistory from 'react-router/lib/BrowserHistory';
import App from './components/app';
import Users from './components/users';
import User from './components/user';
import About from './components/about';
import NoMatch from './components/404';

render((
  <Router history={new BrowserHistory()}>
    <Route path="users" component={App}>
      <Route path="about" component={About}/>
      <Route path="list" component={Users}>
        <Route path="/user/:userId" component={User}/>
      </Route>
      <Route path="*" component={NoMatch}/>
    </Route>
  </Router>
  ), document.getElementById('react')
);