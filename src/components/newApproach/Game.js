import React, { useState, useEffect } from "react";
import { AREAONE } from "../../constants/Story";
import carrotTop from "../../media/carrot-top-10.png";
import emo from "../../media/emo.jpg";
import Stats from "./Stats";
import { WEAPONS } from "../../constants/Weapons";
import BattleNewApproach from "./BattleNewApproach";
// import {
//   fourSidedDie,
//   twoSidedDie,
//   threeSidedDie,
//   sixSidedDie,
// } from "../constants/Dice";carr
import {CreateCharacter} from './CreateCharacter'
import ChapterOne from './ChapterOne'
import gamePlay from "../../media/gameplay.mp3";
import battle from "../../media/battle.mp3";
// import victory from "../../media/victory.mp3";
// import death from "../../media/death.mp3";
import ReactHowler from "react-howler";


const Game = () => {
  const [name, setName] = useState(null)
  const [hitPoints, setHitPoints] = useState(50)
  const [damage, setDamage] = useState(0);
  const [defence, setDefence] = useState(5)
  const [weapon, setWeapon] = useState("Bare Hands");
  const [damageString, setDamageString] = useState("1-2");
  const [battleTextDisplayed, setBattleTextDisplayed] = useState(false);
  const [isEmoImageVisible, setIsEmoImageVisible] = useState(false);
  const [armor, setArmor] = useState("Naked");
  const [battleEmo, setBattleEmo] = useState(false);
  const [battleButtonsOn, setBattleButtonsOn] = useState(false);
  const [playerInitiativeVisible, setPlayerInitiativeVisible] = useState(false);
  
  const [enemyHitPoints, setEnemyHitPoints] = useState(null);
  const [enemyDamage, setEnemyDamage] = useState(null);
  const [enemyDefence, setEnemyDefence] = useState(null);
  
  const [createCharacterVisible, setCreateCharacterVisible] = useState(true)
  const [chapterOne, setChapterOne] = useState(false);
  const [chapterTwo, setChapterTwo] = useState(false);




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
        <h5>Hit Points: {enemyHitPoints}</h5>
      </div>
    );
  }

  // MUSIC
  const [isGameMusicPlaying, setIsGameMusicPlaying] = useState(true);

  const turnOffGamePlayMusic = () => {
      setIsGameMusicPlaying(false)
      }

    const [isBattleMusicPlaying, setIsBattleMusicPlaying] = useState(false);

    const turnOnBattleMusic = () => {
      setIsBattleMusicPlaying(true);
    };
    const turnOffBattleMusic = () => {
      setIsBattleMusicPlaying(false);
    };

    const [isVictoryMusicPlaying, setIsVictoryMusicPlaying] = useState(false)

    const turnOnVictoryMusic = () => {
      setIsVictoryMusicPlaying(true);
    };

    const turnOffVictoryMusic = () => {
      setIsVictoryMusicPlaying(true);
    };

    const [isDeathMusicPlaying, setIsDeathMusicPlaying] = useState(
      false,
    );

    const turnOnDeathMusic = () => {
      setIsDeathMusicPlaying(true);
    };

    const turnOffDeathMusic = () => {
      setIsDeathMusicPlaying(true);
    };

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
          {createCharacterVisible && (<CreateCharacter
            turnOnBattleMusic={turnOnBattleMusic}
            turnOffGamePlayMusic={isGameMusicPlaying}
            setIsGameMusicPlaying={setIsGameMusicPlaying}
            name={name}
            setName={setName}
            hitPoints={hitPoints}
            setHitPoints={setHitPoints}
            damage={damage}
            setDamage={setDamage}
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
            setCreateCharacterVisible={setCreateCharacterVisible}
          />)}
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
              isGameMusicPlaying={isGameMusicPlaying}
              turnOnBattleMusic={turnOnBattleMusic}
              turnOffGamePlayMusic={turnOffGamePlayMusic}
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
              enemyHitPoints={enemyHitPoints}
              setEnemyHitPoints={setEnemyHitPoints}
              enemyDamage={enemyDamage}
              setEnemyDamage={setEnemyDamage}
              enemyDefence={enemyDefence}
              setEnemyDefence={setEnemyDefence}
            />
          )}
        </div>
      </div>
      <ReactHowler
        src={gamePlay}
        volume={0.4}
        loop={true}
        playing={isGameMusicPlaying}
      />
      <ReactHowler
        src={battle}
        volume={0.3}
        loop={true}
        playing={isBattleMusicPlaying}
      />
      {/* <ReactHowler
        src={victory}
        volume={0.3}
        loop={true}
        playing={isVictoryMusicPlaying}
      />
      <ReactHowler
        src={death}
        volume={0.3}
        loop={true}
        playing={isDeathMusicPlaying}
      /> */}
    </div>
  );
}

export default Game

