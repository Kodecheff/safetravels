import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  } from 'react-router-dom'
import Home from './Home'
import Info from './Info'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return(
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/info" component={Info} />
      </Switch>
  </Router>
  )
}

export default App;
