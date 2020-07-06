import { RUN } from "../../constants/Story";
import React, { useState } from "react";
import { Redirect } from "react-router-dom";

const Run = () => {


  const [pushedTryAgain, setPushTryAgain] = useState(false);

  return (
    <React.Fragment>
      <div className="deadWrapper">
        <h5 className="deadText">
          {RUN[Math.floor(Math.random() * RUN.length)]}
        </h5>
        <h1 className="areDeadText">COWARD!</h1>
        <h1
          className="tryAgainButtonWrapper"
          onClick={() => setPushTryAgain(true)}
        >
          Try Again
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

export default Run;
