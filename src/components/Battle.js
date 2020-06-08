import React, { useState, useEffect } from "react";
import { emoPhilips, timAllen, judyTenuda } from "../constants/Monsters";
import { Redirect } from "react-router-dom";
import { RUN } from "../constants/Story";

// Need to figure out Double damage, importing enemies upon battle

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

    const [enemyHitPoints, setEnemyHitPoints] = useState(null);
    const [enemyDamage, setEnemyDamage] = useState(null);
    const [enemyDefence, setEnemyDefence] = useState(null);

    useEffect(() => {
        setEnemyHitPoints(emoPhilips.hitPoints);
      }, []);

    const [isRunDisplayed, setIsRunDisplayed] = useState(false);
    const [redirect, setRedirect] = useState(null)

  const beginAttack = () => {
    let twentySidedDie = Math.floor(Math.random() * 20) + 1;
    if (twentySidedDie >= 5) {
        console.log("INITIATIVE ROLL= ", twentySidedDie);
         console.log("You have won intiiative and attack the foul createure");
        playerAttack();
        enemyAttack();
    } else {
        console.log("INITIATIVE ROLL= ", twentySidedDie);
        console.log("Your Foe has won intiiative and attacks you");
        enemyAttack();
        playerAttack();
    }
  };

  const playerAttack = () => {
    let twentySidedDie = Math.floor(Math.random() * 20) + 1;
    console.log("PLAYER ATTACK ROLL ________", twentySidedDie)
    if (twentySidedDie === 20) {
        doubleDamageVsEnemy();
        return;
    }
      if (twentySidedDie >= emoPhilips.defence) {
        console.log("PLAYER ATTACK DIE ROLL", twentySidedDie);
        setEnemyHitPoints(enemyHitPoints - damage);
        emoPhilips.hitPoints -= damage;
        console.log("YOU HIT YOUR FOE AND INFLICT THIS MUCH DAMAGE", damage);
        console.log(
          "EMO PHILIPS HAS THIS MANY HIT POINTS LEFT",
          enemyHitPoints,
        );
        isEnemyDeadCheck();
      } else {
        console.log("YOU SWING AT YOUR FOE AND MISS HORRIBLY");
      }
  };

  const enemyAttack = () => {
    let twentySidedDie = Math.floor(Math.random() * 20) + 1;
    if (twentySidedDie >= defence) {
      console.log("your foe attacks you with a roll of", twentySidedDie);
      setHitPoints(hitPoints -= emoPhilips.damage);
      console.log("and hits you for: ", emoPhilips.damage);
      console.log("You have THIS MANY HIT POINTS LEFT", hitPoints);
      isPlayerDeadCheck();
    } else {
      console.log("YOUR FOE HAS SWUNG AND MISSED YOU");
    }
  };

  const isPlayerDeadCheck = () => {
      if (hitPoints <= 0) {
          console.log("YOU HAVE DIED!!!")
      }
  }

    const isEnemyDeadCheck = () => {
      if (emoPhilips.hitPoints <= 0) {
          console.log("YOU HAVE DEFEATED YOUR FOE!!!");
      }
  }


  //FIGURE THIS OUT
  const doubleDamageVsEnemy = () => {
    console.log("YOU ROLLED A 20 AND UNLEASH A DEEP BELLOWING HOWL AS YOU TRASH YOUR FOE FOR DOUBLE DAMAGE")
    setEnemyHitPoints(enemyHitPoints - (damage * 2));
    console.log("YOU HIT YOUR FOE AND INFLICT THIS MUCH DAMAGE", damage);
    console.log(
        "EMO PHILIPS HAS THIS MANY HIT POINTS LEFT",
        enemyHitPoints,
        );
  }

  const handleRunButton = () => {
    setIsRunDisplayed(true);
  };

  const renderRun = () => {
    return <h5>{RUN[Math.floor(Math.random() * RUN.length)]}</h5>;
  };



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
          {/* {isPlayerWonInitativeDisplayed && renderInitiative()}
          {isEnemyWonInitativeDisplayed && renderInitiative()} */}
        </div>
      </div>
    </div>
  );
};

export default Battle;
