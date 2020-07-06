import React, { useState, useEffect } from "react";
import { MONSTERS } from "../constants/Monsters";

const Battle = ({
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
  const [isPlayerAttacking, setIsPlayerAttacking] = useState(false);
  const [enemyIsAttacking, setEnemyIsAttacking] = useState(false);
  const [isRunDisplayed, setIsRunDisplayed] = useState(false);
  const [
    isPlayerWonInitativeDisplayed,
    setIsPlayerWonInitiativeDisplayed,
  ] = useState(false);
  const [
    isEnemyWonInitativeDisplayed,
    setIsEnemyWonInitiativeDisplayed,
  ] = useState(false);
  const [numberOfAttacks, setNumberOfAttacks] = useState(0);

  let emoPhilips = MONSTERS.emoPhilips.name;

const beginAttack = () => {
    let twentySidedDie = Math.floor(Math.random() * 20) + 1;
    console.log("INITIATIVE DIE ROLL", twentySidedDie);
    playerAttack()
    enemyAttack()
}

  const playerAttack = () => {
    let twentySidedDie = Math.floor(Math.random() * 20) + 1;

    if (twentySidedDie >= MONSTERS.emoPhilips.defence) {

      console.log("PLAYER ATTACK DIE ROLL", twentySidedDie);
      MONSTERS.emoPhilips.hitPoints -= damage;
      console.log("YOU HIT YOUR FOE AND INFLICT THIS MUCH DAMAGE", damage);
      console.log(
        "EMO PHILIPS HAS THIS MANY HIT POINTS LEFT",
        MONSTERS.emoPhilips.hitPoints,
      );
      console.log("number of attacks IN PLAYER ATTACK", numberOfAttacks);
    } else {
      console.log("YOU SWING AT YOUR FOE AND MISS HORRIBLY");
      setIsPlayerAttacking(false);
      setEnemyIsAttacking(true);
    }
  };
  console.log("number of attacks BODY", numberOfAttacks);
  const enemyAttack = () => {
    let twentySidedDie = Math.floor(Math.random() * 20) + 1;
    if (twentySidedDie >= defence) {
      console.log("your foe attacks you with a roll of", twentySidedDie);
      setHitPoints((hitPoints -= MONSTERS.emoPhilips.damage));
      console.log("and hits you for: ", MONSTERS.emoPhilips.damage);
      console.log("You have THIS MANY HIT POINTS LEFT", hitPoints);
      return (
        <div>
          <h5></h5>
        </div>
      );
    } else {
      console.log("YOUR FOE HAS SWUNG AND MISSED YOU");
      setIsPlayerAttacking(true);
      setEnemyIsAttacking(false);
    }
  };

  const handleRunButton = () => {
    setIsRunDisplayed(true);
  };
  const renderRun = () => {
    return (
      <h5>
        "The sky darkens to an unfathomable black as blood rains from the sky in
        thick torrents. Skeletal hands burst from the earth. The wailing of
        hungry children and screaming lambs trumpet from near to far. Humanities
        fate is doomed to enslavement via the Illuimiati of Laughter. They have
        won. They reign supreme over all of humanity. For you...Are a coward. "
      </h5>
    );
  };

  if (isPlayerAttacking) {
    playerAttack();
    setIsPlayerAttacking(false);
  }

  if (enemyIsAttacking) {
    enemyAttack();
    setEnemyIsAttacking(false);
  }

  // const preventRerenderDuringPlayerAttack = () => {
  //   setIsPlayerAttacking(false);
  // };
  // const preventRerenderDuringEnemyAttack = () => {
  //     setEnemyIsAttacking(false);
  // };

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
          <h5>Battle Display Text</h5>
          {isRunDisplayed && renderRun()}
          {isPlayerWonInitativeDisplayed && renderInitiative()}
          {isEnemyWonInitativeDisplayed && renderInitiative()}
        </div>
      </div>
    </div>
  );
};

export default Battle;
