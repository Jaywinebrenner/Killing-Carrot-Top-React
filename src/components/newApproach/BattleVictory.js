import { DEAD } from "../../constants/Story";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const BattleVictory = ({ isRunVisible }) => {
  
  const [pushedTryAgain, setPushTryAgain] = useState(false);

  return (
    <React.Fragment>
      <div className="deadWrapper">
        <h5 className="deadText">
          With one last crushing blow, Emo Philips lets out an ungodly howl and begins to convulse. His marionette-like swivels in your direction. "You will never topple The Illuminati of Laughter," he squeaks with a mild smirk on his blood-soaked face. He shoots you one final wild-eyed stare and crumples to the ground. You are...
        </h5>
        <h1 className="areDeadText">VICTORIOUS</h1>
        <h1
          className="tryAgainButtonWrapper"
          onClick={() => setPushTryAgain(true)}
        >
          Continue
        </h1>
        {pushedTryAgain && (
          <Redirect
            to={{
              pathname: "/",
            }}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default BattleVictory;
