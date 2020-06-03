import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from './components/Intro';
import Landing from './components/Landing'
import {BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Landing} />
        <Route path="/home" exact={true} component={Intro} />
      </Switch>
    </Router>
  );
}

export default App;
