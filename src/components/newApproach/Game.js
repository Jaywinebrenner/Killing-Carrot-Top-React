import React, { useState, useEffect } from "react";
import { AREAONE } from "../../constants/Story";
import carrotTop from "../../media/carrot-top.png";
import emo from "../../media/emo.jpg";
import Stats from "../Stats";
import { WEAPONS } from "../../constants/Weapons";
import BattleNewApproach from "./BattleNewApproach";
// import {
//   fourSidedDie,
//   twoSidedDie,
//   threeSidedDie,
//   sixSidedDie,
// } from "../constants/Dice";
import {CreateCharacter} from './CreateCharacter'
import ChapterOne from './ChapterOne'


const Game = () => {
  const [name, setName] = useState(null)
  const [hitPoints, setHitPoints] = useState(20)
  const [damage, setDamage] = useState(1);
  const [defence, setDefence] = useState(5)
  const [weapon, setWeapon] = useState("Bare Hands");
  const [damageString, setDamageString] = useState("1-2");
  const [battleTextDisplayed, setBattleTextDisplayed] = useState(false);
  const [isEmoImageVisible, setIsEmoImageVisible] = useState(false);
  const [armor, setArmor] = useState("Naked");
  const [chapterOne, setChapterOne] = useState(false);
  const [battleEmo, setBattleEmo] = useState(false);
  const [battleButtonsOn, setBattleButtonsOn] = useState(false);
  const [playerInitiativeVisible, setPlayerInitiativeVisible] = useState(false);


console.log("emo image visible??", isEmoImageVisible);

// Render Image Stuff
  const renderEmoImage = (imageName) => {
    return <img className="emo" src={emo} />;
  };

 const renderEmemyBlurb = () => {
    return (
      <div>
        <h2 className="battleHeaderText">
          You stand face to face with the Lilth Menace himself... 
        </h2>
        <h1>Emo Philips</h1>
      </div>
    );
  }

  return (
    <div>
      <div className="homeWrapper">
        <div className="headerWrapper">
          <div className="headerColOne">
            <img className="carrotTopThumbNail" src={carrotTop} />
          </div>
          <div className="headerColTwo">
            <h1 className="headerText">KILLING CARROT TOP</h1>
          </div>
        </div>

        <div className="statWrapper">
          <div className="statColOne">
            <Stats
              hitPoints={hitPoints}
              damage={damage}
              damageString={damageString}
              armor={armor}
              weapon={weapon}
              name={name}
              defence={defence}
            />
          </div>

          <div className="statColTwo">
            {isEmoImageVisible && renderEmemyBlurb()}
          </div>

          <div className="statColThree">
            {isEmoImageVisible && renderEmoImage()}
          </div>
        </div>

        <div className="gameWindowWrapper">
          {" "}
          <CreateCharacter
            name={name}
            setName={setName}
            hitPoints={hitPoints}
            setHitPoints={setHitPoints}
            damage={damage}
            setDamage={setDamageString}
            defence={defence}
            setDefence={setDefence}
            weapon={weapon}
            setWeapon={setWeapon}
            damageString={damageString}
            setDamageString={setDamageString}
            armor={armor}
            setArmor={setArmor}
            chapterOne={chapterOne}
            setChapterOne={setChapterOne}
          />
          {chapterOne && (
            <ChapterOne
              armor={armor}
              battleEmo={battleEmo}
              setBattleEmo={setBattleEmo}
              setIsEmoImageVisible={setIsEmoImageVisible}
            />
          )}
          {battleEmo && (
            <BattleNewApproach
              hitPoints={hitPoints}
              setHitPoints={setHitPoints}
              damage={damage}
              setDamage={setDamage}
              weapon={weapon}
              setWeapon={setWeapon}
              name={name}
              setName={setName}
              defence={defence}
              setDefence={setDefence}
              setBattleEmo={setBattleEmo}
              battleEmo={battleEmo}
              playerInitiativeVisible={playerInitiativeVisible}
              setPlayerInitiativeVisible={setPlayerInitiativeVisible}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Game