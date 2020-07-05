// WORKING BATTLE REF

import React, { useState, useEffect } from "react";
import { emoPhilips, timAllen, judyTenuda } from "../../constants/Monsters";
import { Redirect } from "react-router-dom";
import { RUN } from "../../constants/Story";
import { twentySidedDie } from "../../constants/Dice";

// Need to figure out Double damage, importing enemies upon BattleNewApproach

  let initiativeRoll = null;
  let playerAttackRoll = null;
  let enemyAttackRoll = null;

const BattleNewApproach = ({
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
  battleEmo,
}) => {
  const [enemyHitPoints, setEnemyHitPoints] = useState(null);
  const [enemyDamage, setEnemyDamage] = useState(null);
  const [enemyDefence, setEnemyDefence] = useState(null);

  const [isPlayerWonInitiativeVisible, setIsPlayerWonInitiativeVisible] = useState(false);
  const [isEnemyWonInitiativeVisible, setIsEnemyWonInitiativeVisible] = useState(false);
  const [isPlayerAttackVisible, setIsPlayerAttackVisible] = useState(false);
  const [isEnemyAttackVisible, setIsEnemyAttackVisible] = useState(false);
  const [playerMissed, setPlayerMissed] = useState(false);
  const [enemyMissed, setEnemyMissed] = useState(false);

  //RENDER TO DOM



  const renderPlayerWonInitiative = (initiativeRoll) => {
       console.log("INITAITVE ROLLLLLL", initiativeRoll);
    return (
      <React.Fragment>
        <h5 className="initiativeRoll">INITIATIVE ROLL - {initiativeRoll}</h5>
        <h5 className="initiativeText">You have won intiiative and attack the foul creature</h5>
      </React.Fragment>
    );
  };

  const renderEnemyWonInitiative = (initiativeRoll) => {
    return (
      <React.Fragment>
        <h5 className="initiativeRoll">INITIATIVE ROLL - {initiativeRoll}</h5>
        <h5 className="initiativeText">
          Your foe has won initiative and attacks!
        </h5>
      </React.Fragment>
    );
  };

  const renderPlayerAttack = (playerAttackRoll) => {
    return (
      <React.Fragment>
        <h5 className="attackRoll"> YOUR ATTACK ROLL - {playerAttackRoll}</h5>
        <h5 className="attackText">
          You have thrashed your foe for {damage} damage!
        </h5>
      </React.Fragment>
    );
  }

    const renderEnemyAttack = (enemyAttackRoll) => {
      return (
        <React.Fragment>
          <h5 className="attackRoll">ENEMY ATTACK ROLL - {enemyAttackRoll}</h5>
          <h5 className="attackText">
            A virulent blow across your face sprays a fine mist of blood into
            the air for {emoPhilips.damage}
          </h5>
        </React.Fragment>
      );
    };

  const renderEnemyMissed = (enemyAttackRoll) => {
    return (
      <React.Fragment>
        <h5 className="attackRoll">ENEMY ATTACK ROLL - {enemyAttackRoll}</h5>
        <h5 className="attackText">
          Your foe stumbles and clumsily misses you!
        </h5>
      </React.Fragment>
    );
  };
    const renderPlayerMissed = (playerAttackRoll) => {
      return (
        <React.Fragment>
          <h5 className="attackRoll">
            PLAYER ATTACK ROLL - {playerAttackRoll}
          </h5>
          <h5 className="attackText">
            You rolled a {playerAttackRoll}, swing and wildly miss.
          </h5>
        </React.Fragment>
      );
    };

    

  console.log("Emo Philips has this many Hit Points", enemyHitPoints);
  console.log("You have this many Hit Points", hitPoints);
  console.log("isPlayerWonInitiativeVisible", isPlayerWonInitiativeVisible);
  console.log("__________________________________________________");

  useEffect(() => {
    const loadEmo = () => {
      setEnemyHitPoints(emoPhilips.hitPoints);
    };

    loadEmo();
  }, []);

  const [isRunDisplayed, setIsRunDisplayed] = useState(false);

  // INITIATIVE
  const beginAttack = () => {
    initiativeRoll = Math.floor(Math.random() * 20) + 1;
    setPlayerMissed(false)
    setEnemyMissed(false)
    setIsPlayerWonInitiativeVisible(false);
    setIsEnemyWonInitiativeVisible(false);
    if (initiativeRoll >= 5) {
      console.log("INITIATIVE ROLL= ", initiativeRoll);
      console.log("You have won intiiative and attack the foul createure");
      playerAttack();
      enemyAttack();
      setIsPlayerWonInitiativeVisible(true);
      return (
        <div>
          <h5>The initiative roll is {initiativeRoll}</h5>
          <h5>You have won intiiative and attack the foul createure</h5>
        </div>
      );
    } else {
      console.log("INITIATIVE ROLL= ", initiativeRoll);
      console.log("Your Foe has won intiiative and attacks you");
      enemyAttack();
      playerAttack();
      setIsEnemyWonInitiativeVisible(true);
    }
    return initiativeRoll;
  };

 
// PLAYER ATTACK

  const playerAttack = () => {
    playerAttackRoll = Math.floor(Math.random() * 20) + 1;
  setIsPlayerAttackVisible(false)
  setPlayerMissed(false);
    console.log("PLAYER ATTACK ROLL ________", playerAttackRoll);
    if (playerAttackRoll === 20) {
      doubleDamageVsEnemy();
      return;
    }
    if (playerAttackRoll >= emoPhilips.defence) {
      console.log("EMOS HP BEFORE ATTACK", enemyHitPoints);
      setEnemyHitPoints(enemyHitPoints - damage);
      console.log("YOU HIT YOUR FOE AND INFLICT THIS MUCH DAMAGE", damage);
      // console.log(
      //   "EMO PHILIPS HAS THIS MANY HIT POINTS LEFT",
      //   enemyHitPoints,
      // );
      setIsPlayerAttackVisible(true)
      isEnemyDeadCheck();
    } else {
      setPlayerMissed(true)
      console.log("YOU SWING AT YOUR FOE AND MISS HORRIBLY");
    }
    return playerAttackRoll;
  };

  //ENEMY ATTACK 

  const enemyAttack = () => {
    enemyAttackRoll = Math.floor(Math.random() * 20) + 1;
    if (enemyAttackRoll === 20) {
      doubleDamageVsPlayer();
      return;
    }
    if (enemyAttackRoll >= defence) {
      console.log("your foe attacks you with a roll of", enemyAttackRoll);
      setHitPoints((hitPoints -= emoPhilips.damage));
      console.log("and hits you for: ", emoPhilips.damage);
      // console.log("You have THIS MANY HIT POINTS LEFT", hitPoints);
      setIsEnemyAttackVisible(true);
      isPlayerDeadCheck();
    } else {
      setEnemyMissed(true)
      console.log("YOUR FOE HAS SWUNG AND MISSED YOU");
    }
   return enemyAttackRoll;
  };

  const isPlayerDeadCheck = () => {
    if (hitPoints <= 0) {
      console.log("YOU HAVE DIED!!!");
    }
  };

  const isEnemyDeadCheck = () => {
    if (emoPhilips.hitPoints <= 0) {
      console.log("YOU HAVE DEFEATED YOUR FOE!!!");
    }
  };

  //DOUBLE DAMAGE
  let doubleDamageVsEnemyAmount = null;
  const doubleDamageVsEnemy = () => {
    console.log(
      "YOU ROLLED A 20 AND UNLEASH A DEEP BELLOWING HOWL AS YOU TRASH YOUR FOE FOR DOUBLE DAMAGE",
    );
    if (damage === 1) {
      doubleDamageVsEnemyAmount = 2;
    } else {
      doubleDamageVsEnemyAmount = damage * 2;
    }
    setEnemyHitPoints(enemyHitPoints - doubleDamageVsEnemyAmount);
    console.log(
      "YOU HIT YOUR FOE AND INFLICT THIS MUCH DAMAGE",
      doubleDamageVsEnemyAmount,
    );
  };

  let doubleDamageVsPlayerAmount = null;
  const doubleDamageVsPlayer = () => {
    console.log(
      "YOUR FOE ROLLED A 20 AND SINKS HIS WEAPON DEEP INTO YOUR CHEST FOR DOUBLE DAMAGE",
    );
    if (emoPhilips.damage === 1) {
      doubleDamageVsPlayerAmount = 2;
    } else {
      doubleDamageVsPlayerAmount = emoPhilips.damage * 2;
    }
    setHitPoints((hitPoints -= doubleDamageVsPlayerAmount));
    console.log(
      "YOUR FOE INFLICTS THIS MUCH DAMAGE:",
      doubleDamageVsPlayerAmount,
    );
  };

  const handleRunButton = () => {
    setIsRunDisplayed(true);
  };

  const renderRun = () => {
    return <h5>{RUN[Math.floor(Math.random() * RUN.length)]}</h5>;
  };

  const renderEntireAttackRound = () => {
    return (
      <React.Fragment>
        <div>
          {/* {console.log("player attack roll in attack RENDER", playerAttackRoll)} */}

          {isRunDisplayed && renderRun()}

          {/* INITIATIVE */}
          {isPlayerWonInitiativeVisible &&
            renderPlayerWonInitiative(initiativeRoll)}
          {isEnemyWonInitiativeVisible &&
            renderEnemyWonInitiative(initiativeRoll)}

          {/* FIRST ROUND ATTACK */}
          {isPlayerAttackVisible && isPlayerWonInitiativeVisible ? (
            renderPlayerAttack(playerAttackRoll)
          ) : (
            <React.Fragment></React.Fragment>
          )}
          {isEnemyAttackVisible && isEnemyWonInitiativeVisible ? (
            renderEnemyAttack(enemyAttackRoll)
          ) : (
            <React.Fragment></React.Fragment>
          )}
          {isEnemyAttackVisible && enemyMissed ? (
            renderEnemyMissed(enemyAttackRoll)
          ) : (
            <React.Fragment></React.Fragment>
          )}
          {playerMissed ? (
            renderPlayerMissed(playerAttackRoll)
          ) : (
            <React.Fragment></React.Fragment>
          )}
          {console.log("is enemy attack visible?", isEnemyAttackVisible)}
          {console.log("is enemy missed true?", enemyMissed)}
          {console.log("is player attack visible?", isPlayerAttackVisible)}
          {console.log("is plaery missed true?", playerMissed)}
        </div>
        <div>
          {/* {isEnemyWonInitiativeVisible & enemyMissed && renderEnemyMissed()}
          {isPlayerAttackVisible & isPlayerWonInitiativeVisible &&
            renderPlayerAttack(playerAttackRoll)}
            {isEnemyAttackVisible & isEnemyWonInitiativeVisible &&
            renderEnemyAttack(enemyAttackRoll)} */}
        </div>
      </React.Fragment>
    );
  };



  const renderBattleButtons = () => {
    return (
      <div>
        <div className="battleButtonsWrapper">
          <div className="attackButtonWrapper">
            <h5 onClick={() => beginAttack()} className="attackButtonText">
              Attack
            </h5>
          </div>
          <div className="runButtonWrapper">
            <h5 onClick={() => handleRunButton()} className="runButtonText">
              Run
            </h5>
          </div>

          <div>
            {renderEntireAttackRound()}
            {/* {isRunDisplayed && renderRun()};
            {isPlayerWonInitiativeVisible &&
              renderPlayerWonInitiative(initiativeRoll)}
            {isEnemyWonInitiativeVisible &&
              renderEnemyWonInitiative(initiativeRoll)} */}
            
            {/* {isPlayerAttackVisible && renderPlayerAttack(playerAttackRoll)}
            {isEnemyAttackVisible && renderEnemyAttack(enemyAttackRoll)}
            {playerMissed && renderPlayerMissed(playerAttackRoll)}
            {enemyMissed && renderEnemyMissed(enemyAttackRoll)} */}
          </div>
        </div>
      </div>
    );
  };

  return <React.Fragment>{battleEmo && renderBattleButtons()}</React.Fragment>;
};

export default BattleNewApproach;
