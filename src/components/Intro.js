import React from "react";
import { INTRO } from "./Story";
import {AREAONE} from "./Story";
import carrotTop from '../media/carrot-top.png'


const Intro = () => {

const renderIntroText = () => {
  	 setTimeout(()=> {
       return <p>fart</p>
       
	 }, 1500)
}
// const renderIntroText = () => {
//   return <p>{INTRO.one}</p>;
// }

console.log(renderIntroText);

    const renderIntro = () => {
        return (
          <div>
            <h3 className="storyText">{INTRO.one}</h3>
            <h3 className="storyText">{INTRO.two}</h3>
            <h3 className="storyText">{INTRO.three}</h3>
          </div>
        );
    }

    return (
      <div className="introWrapper">
        <h1 className="header">KILLING CARROT TOP</h1>
        <div className="introTextWrapper">
          {renderIntroText()}
        </div>
        <img className="carrotTopImageIntro" src={carrotTop} />
      </div>
    );
}

export default Intro