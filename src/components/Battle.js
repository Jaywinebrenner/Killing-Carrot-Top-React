import React, { useState, useEffect } from "react";
import {MONSTERS} from '../constants/Monsters'


const Battle = ( {
  hitPoints,
  setHitPoints,
  name,
  setName,
  weapon,
  setWeapon,
  damage,
  setDamage,
  defence,
  setDefence,
  battleTextDisplayed,
  setBattleTextDisplayed,
}) => {

  const [isPlayerDead, setPlayerDead] = useState(false);
  const [isEnemyDead, setIsEnemyDead] = useState(false);

  let emoPhilips = MONSTERS.emoPhilips.name;

  let handDamage = Math.floor(Math.random() * 2) + 1;
  let butterKnifeDamage = Math.floor(Math.random() * 3) + 1;
  let trashCanLidDamage = Math.floor(Math.random() * 4) + 1;
  let twoByFourDamage = Math.floor(Math.random() * 5) + 1;
  let twentySidedDie = Math.floor(Math.random() * 20) + 1;

  console.log("EMOS DEFENCD", MONSTERS.emoPhilips.defence);
  console.log("HIT POINTS", hitPoints)

  
  const initiative = () => {
      let twentySidedDie = Math.floor(Math.random() * 20) + 1;
      console.log("TWENTY SIDED DIE", twentySidedDie)
      if (twentySidedDie > 5){
          playerAttack()
        } else {
            monsterAttack()
        }

    }
    
    const playerAttack = () => {
        let twentySidedDie = Math.floor(Math.random() * 20) + 1;
        if (twentySidedDie >= `MONSTERS.${emoPhilips}.defence`) {
        }
        console.log("player attack")
    }
      const monsterAttack = () => {
        console.log("monster attack");
      };



  const runAway = () => {
      let twentySidedDie = Math.floor(Math.random() * 20) + 1;
          if (twentySidedDie > 5) {
            console.log("PLAYER RUNS AWAY")
          } else {
            monsterAttack();
          }
  }

  

  return (
    <div>
      <div className="battleButtonsWrapper">
        <div className="attackButtonWrapper">
          <h5 onClick={() => initiative()} className="attackButtonText">
            Attack
          </h5>
        </div>
        <div className="runButtonWrapper">
          <h5
            onClick={() => runAway()}
            className="runButtonText"
          >
            Run
          </h5>
        </div>

        <div>
          <h5>Battle Display Text</h5>
        </div>
      </div>
    </div>
  );
};

export default Battle