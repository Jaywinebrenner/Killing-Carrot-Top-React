import React, { useState, useEffect } from "react";
import { emoPhilips, timAllen, judyTenuda } from "../../constants/Monsters";
import { Redirect, Route } from "react-router-dom";
import { RUN } from "../../constants/Story";
import { twentySidedDie } from "../../constants/Dice";
import Typewriter from "typewriter-effect";


// need to figure out how to print out playerAttackRange 
 
  let initiativeRoll = null;
  let playerAttackRoll = null;
  let enemyAttackRoll = null;
  let doubleDamageVsEnemyAmount = null;
  let doubleDamageVsPlayerAmount = null;
    let playerAttackRange = null;
    let enemyAttackRange = null;

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
  enemyHitPoints,
  setEnemyHitPoints,
  enemyDamage,
  setEnemyDamage,
  enemyDefence,
  setEnemyDefence,
  turnOffGamePlayMusic,
  turnOnBattleMusic,
  isGameMusicPlaying
}) => {
  // const [enemyHitPoints, setEnemyHitPoints] = useState(null);
  // const [enemyDamage, setEnemyDamage] = useState(null);
  // const [enemyDefence, setEnemyDefence] = useState(null);

  const [
    isPlayerWonInitiativeVisible,
    setIsPlayerWonInitiativeVisible,
  ] = useState(false);
  const [
    isEnemyWonInitiativeVisible,
    setIsEnemyWonInitiativeVisible,
  ] = useState(false);
  const [isPlayerAttackVisible, setIsPlayerAttackVisible] = useState(false);
  const [isEnemyAttackVisible, setIsEnemyAttackVisible] = useState(false);
  const [playerMissed, setPlayerMissed] = useState(false);
  const [enemyMissed, setEnemyMissed] = useState(false);
  const [isDoubleDamageVsPlayer, setIsDoubleDamageVsPlayer] = useState(false);
  const [IsDoubleDamageVsEnemy, setIsDoubleDamageVsEnemy] = useState(false);
  const [isRunVisible, setIsRunVisible] = useState(false);
  const [battleButtonsVisible, setBattleButtonsVisible] = useState(true);
  const [isPlayerDead, setIsPlayerDead] = useState(true);
  const [isEnemyDead, setIsEnemyDead] = useState(true);



  
 
  useEffect(() => {
    const loadEmo = () => {

      // setPlayerAttackRange(Math.floor(Math.random() * damage) + 1);
      // setEnemyAttackRange(
      //   Math.floor(Math.random() * emoPhilips.damage) + 1,
      // );

      // let playerAttackRange = Math.floor(Math.random() * damage) + 1;
      //  let enemyAttackRange = Math.floor(Math.random() * emoPhilips.damage) + 1;
      setEnemyHitPoints(emoPhilips.hitPoints);
      console.log("USE EFFECT HIPS", enemyHitPoints);
    };

    loadEmo();
  }, []);

  //RENDER TO DOM
  const renderPlayerWonInitiative = (initiativeRoll) => {
    console.log("INITAITVE ROLLLLLL", initiativeRoll);
    return (
      <React.Fragment>
        {/* <Typewriter
          className="initiativeRoll"
          onInit={(typewriter) => {
            typewriter.changeDelay(80).typeString("INITIATIVE ROLL - ").start();
          }}
        />
        <Typewriter
          className="initiativeText"
          onInit={(typewriter) => {
            typewriter
              .changeDelay(80)
              .typeString(
                "You have won intiiative and attack the foul creature",
              )
              .start();
          }}
        /> */}
        <h5 className="initiativeRoll">INITIATIVE ROLL - {initiativeRoll}</h5>
        <h5 className="initiativeText">
          You have won intiiative and attack the foul creature
        </h5>
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
  

  const renderPlayerAttack = (playerAttackRoll, playerAttackRange) => {
    return (
      <React.Fragment>

        <h5 className="attackRoll"> You have rolled a {playerAttackRoll}</h5>
        <h5 className="attackText">
          You have thrashed your foe for {playerAttackRange} damage!
        </h5>
      </React.Fragment>
    );
  };

  const renderEnemyAttack = (enemyAttackRoll) => {
    return (
      <React.Fragment>
        <h5 className="attackRoll">Your foe has rolled a {enemyAttackRoll}</h5>
        <h5 className="attackText">
          A virulent blow across your face sprays a fine mist of blood into the
          air for {enemyAttackRange} damage.
        </h5>
      </React.Fragment>
    );
  };

  const renderEnemyMissed = (enemyAttackRoll) => {
    return (
      <React.Fragment>
        <h5 className="attackRoll">Your foe has rolled a {enemyAttackRoll}</h5>
        <h5 className="attackText">
          Your foe stumbles and clumsily misses you!
        </h5>
      </React.Fragment>
    );
  };
  const renderPlayerMissed = (playerAttackRoll) => {
    return (
      <React.Fragment>
        <h5 className="attackRoll">You have rolled {playerAttackRoll}</h5>
        <h5 className="attackText">You swing wildly and miss!</h5>
      </React.Fragment>
    );
  };

  const renderDoubleDamageVsPlayer = (
    enemyAttackRoll,
    doubleDamageVsPlayerAmount,
  ) => {
    console.log("DOULBE DAMAGE vs PLAYER", doubleDamageVsPlayerAmount);

    return (
      <React.Fragment>
        <h5 className="attackRoll">Your foe has rolled a {enemyAttackRoll}</h5>
        <h5 className="attackText">
          YOUR FOE ROLLED A 20 AND RIPS A WET GAPING WOUND IN YOUR CHEST FOR DOUBLE DAMAGE! Blood paints the wall in a Pollock-esque splatter as you suffer {doubleDamageVsPlayerAmount} damage.
        </h5>
      </React.Fragment>
    );
  };

  const renderDoubleDamageVsEnemy = (
    playerAttackRoll,
    doubleDamageVsEnemyAmount,
  ) => {
    console.log("DOULBE DAMAGE vs ENEMY", doubleDamageVsEnemyAmount);

    return (
      <React.Fragment>
        <h5 className="attackRoll">You have rolled a {playerAttackRoll}</h5>
        <h5 className="attackText">
          You unleash a victorious howl as you thrash your foe for DOULBLE
          DAMAGE, suffering a loss of {doubleDamageVsEnemyAmount} hit points.
        </h5>
      </React.Fragment>
    );
  };

  console.log("Emo Philips has this many Hit Points", enemyHitPoints);
  console.log("You have this many Hit Points", hitPoints);
  console.log("isPlayerWonInitiativeVisible", isPlayerWonInitiativeVisible);
  console.log("__________________________________________________");
  console.log("game play music",isGameMusicPlaying )

  // INITIATIVE



  const beginAttack = () => {
    turnOnBattleMusic();
    turnOffGamePlayMusic();
    initiativeRoll = Math.floor(Math.random() * 20) + 1;

    playerAttackRange = Math.floor(Math.random() * emoPhilips.damage) + 1;
    enemyAttackRange = Math.floor(Math.random() * emoPhilips.damage) + 1;
    // if (playerAttackRange === 1) {
    //   doubleDamageVsEnemyAmount = 2
    // } else {
    //   doubleDamageVsEnemyAmount = playerAttackRange * 2;
    // }

    setPlayerMissed(false);
    setEnemyMissed(false);
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
    return playerAttackRange
    // return initiativeRoll, playerAttackRange;
  };

  // PLAYER ATTACK


  const playerAttack = () => {

    playerAttackRoll = Math.floor(Math.random() * 20) + 1;
    playerAttackRange = Math.floor(Math.random() * damage) + 1;

    setIsDoubleDamageVsEnemy(false);
    setIsPlayerAttackVisible(false);
    setPlayerMissed(false);
    console.log("PLAYER ATTACK ROLL ________", playerAttackRoll);
    if (playerAttackRoll > 10) {
      setIsDoubleDamageVsEnemy(true);
      doubleDamageVsEnemy(playerAttackRange);
      return;
    } else if (playerAttackRoll > emoPhilips.defence) {
      console.log("EMOS HP BEFORE ATTACK", enemyHitPoints);
      setEnemyHitPoints(enemyHitPoints - playerAttackRange);
      console.log(
        "YOU HIT YOUR FOE AND INFLICT THIS MUCH DAMAGE",
        playerAttackRange,
      );
      setIsPlayerAttackVisible(true);
    } else {
      setPlayerMissed(true);
      console.log("YOU SWING AT YOUR FOE AND MISS HORRIBLY");
    }
    isEnemyDeadCheck();
    // return playerAttackRoll;
    return playerAttackRange;
  };

  //ENEMY ATTACK

  const enemyAttack = () => {
    enemyAttackRoll = Math.floor(Math.random() * 20) + 1;
    setIsDoubleDamageVsPlayer(false);
    setIsEnemyAttackVisible(false);
    setEnemyMissed(false);
    if (enemyAttackRoll > 10) {
      doubleDamageVsPlayer(enemyAttackRange);
      return;
    } else if (enemyAttackRoll >= defence) {
      console.log("your foe attacks you with a roll of", enemyAttackRoll);
      setHitPoints((hitPoints -= enemyAttackRange));
      console.log("and hits you for: ", enemyAttackRange);
      // console.log("You have THIS MANY HIT POINTS LEFT", hitPoints);
      setIsEnemyAttackVisible(true);
      isPlayerDeadCheck();
    } else {
      setEnemyMissed(true);
      console.log("YOUR FOE HAS SWUNG AND MISSED YOU");
    }
    return enemyAttackRoll;
  };

  const isPlayerDeadCheck = () => {
    if (hitPoints <= 0) {
      return (
        <Redirect
          to={{
            pathname: "/Dead",
          }}
        />
      );
    }
  };

  console.log("enemy hit points in IN BODY?", enemyHitPoints);

  const isEnemyDeadCheck = () => {
    console.log("enemy hit points in IN CHECK?", enemyHitPoints);
    if (enemyHitPoints < 1) {
      return (
        <Redirect
          to={{
            pathname: "/BattleVictory",
            state: { defence },
          }}
        />
      );
    }
  };

  //DOUBLE DAMAGE

 


  const doubleDamageVsEnemy = (playerAttackRange) => {
    console.log("2222222- player attack range in", doubleDamageVsEnemyAmount);
      console.log(
        "22222- DoubleDamageAmount in DD",
        doubleDamageVsEnemyAmount,
      );
      console.log("222222PLayer ATTACK RANGE in DD", playerAttackRange);
      doubleDamageVsEnemyAmount = playerAttackRange * 2;


    // if (playerAttackRange === 1) {
    //   doubleDamageVsEnemyAmount = 2;
    // } else {
    //   doubleDamageVsEnemyAmount = playerAttackRange * 2;
    // }
    console.log(
      "YOU ROLLED A 20 AND UNLEASH A DEEP BELLOWING HOWL AS YOU TRASH YOUR FOE FOR DOUBLE DAMAGE", 
    );


   
    setEnemyHitPoints(enemyHitPoints - doubleDamageVsEnemyAmount);
    console.log(
      "YOU HIT YOUR FOE AND INFLICT THIS MUCH DAMAGE",
      doubleDamageVsEnemyAmount,
    );
      console.log(
        "22222222- doubleDamageVsEnemyAmount",
        doubleDamageVsEnemyAmount,
      );
    return doubleDamageVsEnemyAmount;
  };


  const doubleDamageVsPlayer = (enemyAttackRange) => {
    setIsDoubleDamageVsPlayer(true);
    console.log(
      "YOUR FOE ROLLED A 20 AND SINKS HIS WEAPON DEEP INTO YOUR CHEST FOR DOUBLE DAMAGE",
    );
    if (enemyAttackRange === 1) {
      doubleDamageVsPlayerAmount = 2;
    } else {
      doubleDamageVsPlayerAmount = enemyAttackRange * 2;
    }
    setHitPoints(hitPoints - doubleDamageVsPlayerAmount);
    console.log(
      "YOUR FOE INFLICTS THIS MUCH DAMAGE:",
      doubleDamageVsPlayerAmount,
    );
    return doubleDamageVsPlayerAmount;
  };


  console.log("DOUBLE DAMAGE vs Player in body", doubleDamageVsPlayerAmount);
  //RUN

  const handleRunButton = () => {
    setIsRunVisible(true);
  };

  const renderRun = () => {
    return (
      <Redirect
        to={{
          pathname: "/Run",
        }}
      />
    );
  };

  const renderBattleIfPlayerWonInitiative = () => {
    {
      isRunVisible && renderRun();
    }
    if (isPlayerWonInitiativeVisible) {
      return (
        <React.Fragment>
  

          {renderPlayerWonInitiative(initiativeRoll)}
          {playerMissed && renderPlayerMissed(playerAttackRoll)}
          {isPlayerAttackVisible &&
            renderPlayerAttack(playerAttackRoll, playerAttackRange)}
          {IsDoubleDamageVsEnemy &&
            renderDoubleDamageVsEnemy(
              playerAttackRoll,
              doubleDamageVsEnemyAmount,
            )}

          {enemyMissed && renderEnemyMissed(enemyAttackRoll)}
          {isEnemyAttackVisible && renderEnemyAttack(enemyAttackRoll)}
          {isDoubleDamageVsPlayer &&
            renderDoubleDamageVsPlayer(
              enemyAttackRoll,
              doubleDamageVsPlayerAmount,
            )}
        </React.Fragment>
      );
    }
  };

  const renderBattleIfEnemyWonInitiative = () => {
    {
      isRunVisible && renderRun();
    }
    if (isEnemyWonInitiativeVisible) {
      return (
        <React.Fragment>
       


          {renderEnemyWonInitiative(initiativeRoll)}
          {enemyMissed && renderEnemyMissed(enemyAttackRoll)}
          {isEnemyAttackVisible && renderEnemyAttack(enemyAttackRoll)}
          {isDoubleDamageVsPlayer &&
            renderDoubleDamageVsPlayer(
              enemyAttackRoll,
              doubleDamageVsPlayerAmount,
            )}
          {/* {renderPlayerWonInitiative(initiativeRoll)} */}
          {playerMissed && renderPlayerMissed(playerAttackRoll)}
          {isPlayerAttackVisible &&
            renderPlayerAttack(playerAttackRoll, playerAttackRange)}
          {IsDoubleDamageVsEnemy &&
            renderDoubleDamageVsEnemy(
              playerAttackRoll,
              doubleDamageVsEnemyAmount,
            )}
        </React.Fragment>
      );
    }
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
            {isRunVisible && renderRun()}
            {isPlayerDeadCheck()}

            {enemyHitPoints && isEnemyDeadCheck()}

            {isPlayerWonInitiativeVisible &&
              renderBattleIfPlayerWonInitiative()}
            {isEnemyWonInitiativeVisible && renderBattleIfEnemyWonInitiative()}
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {battleEmo & battleButtonsVisible && renderBattleButtons()}
    </React.Fragment>
  );
};

export default BattleNewApproach;
