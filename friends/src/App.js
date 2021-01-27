import {BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import React from 'react';

import Login from './components/Login';

import './App.css';

function App() {

  return (
    <Router>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link>Logout</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login" component={Login} />
          <Route component={Login} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
