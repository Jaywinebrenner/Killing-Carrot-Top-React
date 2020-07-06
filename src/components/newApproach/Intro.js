import React from "react";
import { INTRO } from "../../constants/Story";
import carrotTop from '../../media/carrot-top.png'
import { Link } from "react-router-dom";


const Intro = () => {

const renderIntroText = () => {
  return (
    <div>
      <h1 className="introHeader">CHAPTER ONE</h1>
      <h3 className="storyText">{INTRO.one}</h3>
      <h3 className="storyText">{INTRO.two}</h3>
      <h3 className="storyText">{INTRO.three}</h3>
      <Link style={{ textDecoration: "none" }} to="/Game">
        <h1 className="landingContinueButton">CONTINUE</h1>
      </Link>
    </div>
  );
};

    return (
      <div className="deadWrapper">
        <div className="introTextWrapper"> {renderIntroText()} </div>
        <img className="carrotTopImageIntroTwo" src={carrotTop} />
      </div>
    );
}

export default Intro