import React, { useState, useEffect } from "react";



const Battle = () => {

const [isPlayerDead, setPlayerDead] = useState(false)
const [isEnemyDead, setIsEnemyDead] = useState(false)



    return (
      <div>
        <div className="battleButtonsWrapper">
          <div className="attackButtonWrapper">
            <h5 onClick={() => console.log("attacked")} className="attackButtonText">
              Attack
            </h5>
          </div>
          <div className="runButtonWrapper">
            <h5 onClick={() => console.log("ran away")} className="runButtonText">
              Run
            </h5>
          </div>

          <div>
            <h5>Battle Display Text</h5>
          </div>
        </div>
      </div>
    );
}

export default Battle