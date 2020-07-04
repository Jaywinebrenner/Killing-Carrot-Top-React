










// WORKING BATTLE REF

import React, { useState, useEffect } from "react";
import { emoPhilips, timAllen, judyTenuda } from "../../constants/Monsters";
import { Redirect } from "react-router-dom";
import { RUN } from "../../constants/Story";
import { twentySidedDie } from "../../constants/Dice";

export const BattleNewApproach = () => {
  const [battleButtonsOn, setBattleButtonsOn] = useState(false);
  const [beginAttackVisible, setBeginAttackVisible] = useState(false)

  console.log("begin attack visibel?", beginAttackVisible);
  
  useEffect(() => {

    const turnOnBattleButtons = () => {
      setBattleButtonsOn(true);
    };
    turnOnBattleButtons();
  }, []);

         
  const renderBattleButtons = () => {
    return (
      <div>
        <div className="battleButtonsWrapper">
          <div className="attackButtonWrapper">
            <h5
              onClick={() => setBeginAttackVisible(true)}
              className="attackButtonText"
            >
              Attack
            </h5>
          </div>
          <div className="runButtonWrapper">
            <h5 onClick={() => handleRunButton()} className="runButtonText">
              Run
            </h5>
          </div>
        </div>
      </div>
    );
  };

    return (
      <div>
        {battleButtonsOn && renderBattleButtons()}
        {battleButtonsOn && renderRun()}
        {beginAttackVisible && BeginAttack()}
      </div>
    );
  };

  const handleRunButton = () => {
    // setIsRunDisplayed(true);
  };

  const renderRun = () => {
    // return <h5>{RUN[Math.floor(Math.random() * RUN.length)]}</h5>;
  };


let initiativeRoll = null;

const BeginAttack = () => {

  

  initiativeRoll = Math.floor(Math.random() * 20) + 1;

  if (initiativeRoll >= 5) {
    console.log("INITIATIVE ROLL= ", initiativeRoll);
    console.log("You have won intiiative and attack the foul createure");
    // playerAttack();
    // enemyAttack();
    // setPlayerInitiativeVisible(true)
    return (
      <div>
        <h5>The initiative roll is {initiativeRoll}</h5>
        <h5>You have won intiiative and attack the foul createure</h5>
      </div>
    );
  } else {
    console.log("INITIATIVE ROLL= ", initiativeRoll);
    console.log("Your Foe has won intiiative and attacks you");
    // enemyAttack();
    // playerAttack();
    // setIsEnemyWonInitiativeVisible(true);
        return (
          <div>
            <h5>The initiative roll is {initiativeRoll}</h5>
            <h5>Your Foe has won intiiative and attacks you</h5>
          </div>
        );
  }
};

console.log("INITIVE ROLL IN BODY", initiativeRoll);