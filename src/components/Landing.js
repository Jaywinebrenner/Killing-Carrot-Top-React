import React, {useState} from "react";
import { INTRO } from "../constants/Story";
import { AREAONE } from "../constants/Story";
import carrotTop from "../media/carrot-top.png";
import { Link } from "react-router-dom";

const Landing = () => {

const [startGame, setStartGame] = useState(false)
console.log(startGame);

const pressStartGame = () => {
    setStartGame(true)
}

  return (
    <div
      styles={{ backgroundImage: `url(${carrotTop})` }}
      className="landingWrapper"
    >
      <h1 className="header">KILLING CARROT TOP</h1>
      <Link style={{ textDecoration: "none" }} to="/Intro">
        <h1 onClick={pressStartGame} className="header">
          START GAME
        </h1>
      </Link>

      {startGame ? (
        <img className="landingCarrotTopImage" src={carrotTop} />
      ) : (
        <h1></h1>
      )}
    </div>
  );
};

export default Landing;


