import { DEAD } from "../../constants/Story";
import React from "react";

const Dead = () => {
  return (
    <React.Fragment>
      <div className="deadWrapper">
        <h5 className="deadText">{DEAD[Math.floor(Math.random() * DEAD.length)]}</h5>
        <h1 className="areDeadText">ARE DEAD!</h1>
        <h1 className="tryAgainButtonWrapper">Try Again</h1>
      </div>
    </React.Fragment>
  );
}

export default Dead