import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from "./components/newApproach/Intro";
import Landing from "./components/newApproach/Landing";
import Home from "./components/Home";
import {BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"
import Game from "./components/newApproach/Game"



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Landing} />
        <Route path="/Intro" exact={true} component={Intro} />
        <Route path="/Home" exact={true} component={Game} />
        <Game/>
      </Switch>
    </Router>
  );
}

export default App;
