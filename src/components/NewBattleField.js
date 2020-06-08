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
  const [playerIsAttacking, setPlayerIsAttacking] = useState(false);
  const [enemyIsAttacking, setEnemyIsAttacking] = useState(false);

  let emoPhilips = MONSTERS.emoPhilips.name;

  const initiative = () => {
    let twentySidedDie = Math.floor(Math.random() * 20) + 1;
    console.log("INITIATIVE DIE ROLL", twentySidedDie);
    if (twentySidedDie >= 5) {
      // PLAYER ATTACK AND HIT
      console.log("You have won intiiative and attack the foul createure");
      let twentySidedPlayerAttackDie = Math.floor(Math.random() * 20) + 1;
      if (twentySidedPlayerAttackDie >= MONSTERS.emoPhilips.defence) {
        console.log("PLAYER ATTACK DIE ROLL", twentySidedDie);
        MONSTERS.emoPhilips.hitPoints -= damage;
        console.log("YOU HIT YOUR FOE AND INFLICT THIS MUCH DAMAGE", damage);
        console.log(
          "EMO PHILIPS HAS THIS MANY HIT POINTS LEFT",
          MONSTERS.emoPhilips.hitPoints,
        );
      } else {
        //PLAYER ATTACK AND MISS
        console.log("YOU SWING AT YOUR FOE AND MISS HORRIBLY");
      }
    } else {
      //ENEMY ATTACK
      let twentySidedDie = Math.floor(Math.random() * 20) + 1;
      if (twentySidedDie >= defence) {
        console.log("You FOE HAS ROLLED a:", twentySidedDie);
        hitPoints -= MONSTERS.emoPhilips.damage;
        console.log("MONSTER DAMAGE", MONSTERS.emoPhilips.damage);

        console.log("YOU HAVE BEEN HIT FOR: ", MONSTERS.emoPhilips.damage);
        console.log("You have THIS MANY HIT POINTS LEFT", hitPoints);
      } else {
        console.log("YOUR FOE HAS SWUNG AND MISSED YOU");
      }
      console.log("The foul creature gains the intiative and attacks first");
    }
  };

  const playerAttack = () => {
    let twentySidedPlayerAttackDie = Math.floor(Math.random() * 20) + 1;
  };

  const monsterAttack = () => {};

  //   const runAway = () => {
  //       let twentySidedDie = Math.floor(Math.random() * 20) + 1;
  //           if (twentySidedDie > 5) {
  //             console.log("PLAYER RUNS AWAY")
  //           } else {
  //             monsterAttack();
  //           }
  //      }

  if (playerIsAttacking) {
    playerAttack();
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
          <h5 onClick={() => console.log("to do")} className="runButtonText">
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

export default Battle;
