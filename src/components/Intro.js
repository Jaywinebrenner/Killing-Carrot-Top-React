import React from "react";
import { INTRO } from "../constants/Story";
import {AREAONE} from "../constants/Story";
import carrotTop from '../media/carrot-top.png'
import { Link } from "react-router-dom";


const Intro = () => {



const renderIntroText = () => {
  return (
    <div>
      <h3 className="storyText">{INTRO.one}</h3>
      <h3 className="storyText">{INTRO.two}</h3>
      <h3 className="storyText">{INTRO.three}</h3>
      <Link style={{ textDecoration: "none" }} to="/Home">
        <h1 className="header">CONTINUE</h1>
      </Link>
    </div>
  );
};

  

    return (
      <div className="introWrapper">
        <h1 className="header">KILLING CARROT TOP</h1>
        <div className="introTextWrapper"> {renderIntroText()} </div>

        <div className="carrotTopImageIntroWraper">
          <img className="carrotTopImageIntro" src={carrotTop} />
        </div>
      </div>
    );
}

export default Intro