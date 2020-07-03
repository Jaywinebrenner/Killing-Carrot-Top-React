import React, { useState, useEffect } from "react";
import { emoPhilips, timAllen, judyTenuda } from "../../constants/Monsters";
import { Redirect } from "react-router-dom";
import { RUN } from "../../constants/Story";
import { twentySidedDie } from "../../constants/Dice";

// Need to figure out Double damage, importing enemies upon BattleNewApproach

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
  battleEmo
}) => {
  const [enemyHitPoints, setEnemyHitPoints] = useState(null);
  const [enemyDamage, setEnemyDamage] = useState(null);
  const [enemyDefence, setEnemyDefence] = useState(null);

  const [
    isPlayerWonInitiativeVisible,
    setIsPlayerWonInitiativeVisible,
  ] = useState(false);
  const [
    isEnemyWonInitiativeVisible,
    setIsEnemyWonInitiativeVisible,
  ] = useState(false);

  //  const togglePlayerWonInitiative = () => {
  //        setIsPlayerWonInitiativeVisible(!isPlayerWonInitiativeVisible);
  //  }

  // let emoPhilipsHitPoints = setEnemyHitPoints(emoPhilips.hitPoints);
  // console.log("EMO INITAL HPS", emoPhilipsHitPoints);

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

  let initiativeRoll = null;
  const beginAttack = () => {
    setIsPlayerWonInitiativeVisible(false);
    setIsEnemyWonInitiativeVisible(false);

    let twentySidedDie = Math.floor(Math.random() * 20) + 1;
    if (twentySidedDie >= 5) {
      console.log("INITIATIVE ROLL= ", twentySidedDie);
      console.log("You have won intiiative and attack the foul createure");
      playerAttack();
      enemyAttack();
      setIsPlayerWonInitiativeVisible(true);
    } else {
      console.log("INITIATIVE ROLL= ", twentySidedDie);
      console.log("Your Foe has won intiiative and attacks you");
      enemyAttack();
      playerAttack();
      setIsEnemyWonInitiativeVisible(true);
    }
    // return (
    //   <div>
    //     <h5>The initiative roll is {twentySidedDie}</h5>
    //     <h5>You have won intiiative and attack the foul createure</h5>
    //   </div>
    // );
  };

  const playerAttack = () => {
    let twentySidedDie = Math.floor(Math.random() * 20) + 1;
    console.log("PLAYER ATTACK ROLL ________", twentySidedDie);
    if (twentySidedDie === 20) {
      doubleDamageVsEnemy();
      return;
    }
    if (twentySidedDie >= emoPhilips.defence) {
      console.log("EMOS HP BEFORE ATTACK", enemyHitPoints);
      setEnemyHitPoints(enemyHitPoints - damage);
      console.log("YOU HIT YOUR FOE AND INFLICT THIS MUCH DAMAGE", damage);
      // console.log(
      //   "EMO PHILIPS HAS THIS MANY HIT POINTS LEFT",
      //   enemyHitPoints,
      // );
      isEnemyDeadCheck();
    } else {
      console.log("YOU SWING AT YOUR FOE AND MISS HORRIBLY");
    }
  };

  const enemyAttack = () => {
    let twentySidedDie = Math.floor(Math.random() * 20) + 1;
    if (twentySidedDie === 20) {
      doubleDamageVsPlayer();
      return;
    }
    if (twentySidedDie >= defence) {
      console.log("your foe attacks you with a roll of", twentySidedDie);
      setHitPoints((hitPoints -= emoPhilips.damage));
      console.log("and hits you for: ", emoPhilips.damage);
      // console.log("You have THIS MANY HIT POINTS LEFT", hitPoints);
      isPlayerDeadCheck();
    } else {
      console.log("YOUR FOE HAS SWUNG AND MISSED YOU");
    }
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

  const renderPlayerWonInitiative = () => {
    return (
      <div>
        <h5 className="battleText">The initiative roll is {twentySidedDie}</h5>;
        <h5 className="battleText">
          You have won intiiative and attack the foul creature
        </h5>
        ;
      </div>
    );
  };

  const renderEnemyWonInitiative = (twentySidedDie) => {
    return (
      <div>
        <h5 className="battleText">The initiative roll is {twentySidedDie}</h5>;
        <h5 className="battleText">Your foe has won initiative and attacks!</h5>
        ;
      </div>
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
            {isRunDisplayed && renderRun()}
            {isPlayerWonInitiativeVisible && renderPlayerWonInitiative()}
            {isEnemyWonInitiativeVisible && renderEnemyWonInitiative()}
            {/* {isEnemyWonInitativeDisplayed && renderInitiative()} */} */}
          </div>
        </div>
      </div>
    );
  };

  return (
    <React.Fragment>
      {battleEmo && renderBattleButtons()}
    </React.Fragment>
  );
};

export default BattleNewApproach;
