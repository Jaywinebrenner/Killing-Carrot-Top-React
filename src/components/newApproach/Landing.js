import React, {useState} from "react";
import { INTRO } from "../../constants/Story";
import { AREAONE } from "../../constants/Story";
import carrotTop from "../../media/carrot-top.png";
import { Link } from "react-router-dom";

const Landing = () => {

const [startGame, setStartGame] = useState(false)

const pressStartGame = () => {
    setStartGame(true)
}

  return (
    <div className="deadWrapper">
      <h1 className="landingHeader">KILLING CARROT TOP</h1>
      <Link 
      style={{ 
        textDecoration: "none",

        }} to="/Intro">
        <h1 onClick={pressStartGame} className="startGameButtonText">
          START GAME
        </h1>
      </Link>
    </div>
  );
};

export default Landing;



