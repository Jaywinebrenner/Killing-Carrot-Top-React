import React from 'react';
import logo from './logo.svg';
import './App.css';
import Intro from "./components/newApproach/Intro";
import Landing from "./components/newApproach/Landing";
import Dead from "./components/newApproach/Dead";
import Home from "./x-unusedComponents/Home";
import {BrowserRouter as Router, Switch, Link, Route } from "react-router-dom"
import Game from "./components/newApproach/Game"
import Run from "./components/newApproach/Run";
import BattleVictory from "./components/newApproach/BattleVictory";
import ChapterTwo from "./components/newApproach/ChapterTwo";



function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact={true} component={Landing} />
        <Route path="/Intro" exact={true} component={Intro} />
        <Route path="/Game" exact={true} component={Game} />
        <Route path="/Dead" exact={true} component={Dead} />
        <Route path="/Run" exact={true} component={Run} />
        <Route path="/BattleVictory" exact={true} component={BattleVictory} />
        <Route path="/ChapterTwo" exact={true} component={ChapterTwo} />
        <Game />
      </Switch>
    </Router>
  );
}

export default App;
