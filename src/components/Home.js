import React, {useState, useEffect} from "react";
import { INTRO } from "../constants/Story";
import { AREAONE } from "../constants/Story";
import carrotTop from "../media/carrot-top.png";
import { Link } from "react-router-dom";
import Stats from './Stats'
import { WEAPONS } from "../constants/Weapons";
import { getPlayerName } from '../constants/Renders'

const Home = () => {

  let handDamage =  Math.floor(Math.random() * 2) + 1
  let butterKnifeDamage = Math.floor(Math.random() * 3) + 1;
  let trashCanLidDamage = Math.floor(Math.random() * 4) + 1;
  let twoByFourDamage = Math.floor(Math.random() * 5) + 1;

  // RENDER BOOLEANS
  const [getPlayerNameDisplayed, setGetPlayerNameDisplayed] = useState(true);
  const [getWeaponDisplayed, setGetWeaponDisplayed] = useState(false)
  const [isWeaponsChoiceButtonDisplayed, setIsWeaponsChoiceButtonDisplayed] = useState(false)
  const [postRenderWeaponChoiceText, setPostRenderWeaponChoiceText] = useState(false);
  const [isAreaOneDisplayed, setIsAreaOneDisplayed] = useState(false)
  
  // console.log("GET WEAPON DISPLAYED", getWeaponDisplayed);
  // console.log("GETPLAYNAME DISPLAYED", getPlayerNameDisplayed);
  // console.log("POST RENDER WEAPON CHOICE", postRenderWeaponChoiceText);
  // console.log("AREA ONE", AREAONE.one)
  
  const [damage, setDamage] = useState(1);
  const [name, setName] = useState(null)
  const [hitPoints, setHitPoints] = useState(20)
  const [defence, setDefence] = useState(0)
  const [weapon, setWeapon] = useState("Bare Hands");

  
  // console.log("WEAPON", weapon);
  //    console.log("WEAPON STORY", WEAPONS[0].weaponPickUp);
     
console.log("IS AREA ONE DISPLAYED", isAreaOneDisplayed);

  //CHOOSEING A NAME
const submitName = () => {
  setGetPlayerNameDisplayed (false);
  setGetWeaponDisplayed(true)
}

const continueToAreaOneSubmit = () => {
  setIsAreaOneDisplayed(true)
  setPostRenderWeaponChoiceText(false)
}


//CHOOSING A WEAPON
const handleSetButterKnife = () => {
  setWeapon(WEAPONS[1].name)
  setDamage(WEAPONS[1].damageString)
  setIsWeaponsChoiceButtonDisplayed(true)
}

const handleSetTrashCanLid = () => {
  setWeapon(WEAPONS[2].name);
  setDamage(WEAPONS[2].damageString);
   setIsWeaponsChoiceButtonDisplayed(true);
};

const handleSetTwoByFour = () => {
  setWeapon(WEAPONS[3].name);
  setDamage(WEAPONS[3].damageString);
   setIsWeaponsChoiceButtonDisplayed(true);
};

const handleTakeNothing = () => {
  setWeapon(WEAPONS[0].name);
  setDamage(WEAPONS[0].damageString);
   setIsWeaponsChoiceButtonDisplayed(true);
};

const submitWeapon = () => {
  setGetWeaponDisplayed(false)
  setGetPlayerNameDisplayed(false)
  setPostRenderWeaponChoiceText(true)
   setIsWeaponsChoiceButtonDisplayed(false);
}

const renderPostWeaponChoiceText = () => {

    if (weapon === "Bare Hands") {
    return (
    <div>
      <h3>{WEAPONS[0].weaponPickUp}</h3>
      <div onClick={continueToAreaOneSubmit} className="continueButtonWrapper">
        <h3 className="continueButtonText">CONTINUE</h3>
      </div>
    </div>
    )
  }
    if (weapon === "Butter Knife") {
        return (
          <div>
            <h3>{WEAPONS[1].weaponPickUp}</h3>
            <div
              onClick={continueToAreaOneSubmit}
              className="continueButtonWrapper"
            >
              <h3 className="continueButtonText">CONTINUE</h3>
            </div>
          </div>
        );
  }
      if (weapon === "Trash Can Lid") {
       return (
    <div>
      <h3>{WEAPONS[2].weaponPickUp}</h3>
      <div onClick={continueToAreaOneSubmit} className="continueButtonWrapper">
        <h3 className="continueButtonText">CONTINUE</h3>
      </div>
    </div>
    )
  }
      if (weapon === "Broken 2x4") {
    return (
    <div>
      <h3>{WEAPONS[3].weaponPickUp}</h3>
      <div onClick={continueToAreaOneSubmit} className="continueButtonWrapper">
        <h3 className="continueButtonText">CONTINUE</h3>
      </div>
    </div>
    )
  }
    
}

const renderWeaponChoice = () => {
  return (
    <div>
      <h3>
        Before you embark on your perilous journey, you must pick one of three
        weapons at your disposal.
      </h3>
      <div className="answerGridWrapper">
        <div className="answerGridOne" id="butterKnifeSelection">
          <h5 onClick={handleSetButterKnife}>A butter knife</h5>
        </div>

        <div className="answerGridTwo">
          <h5 onClick={handleSetTrashCanLid}>A trash can lid</h5>
        </div>

        <div className="answerGridThree">
          <h5 onClick={handleSetTwoByFour}>A broken 2x4</h5>
        </div>

        <div className="answerGridFour">
          <h5 onClick={handleTakeNothing}>Take nothing</h5>
        </div>
      </div>
    </div>
  );
}

const renderWeaponChoiceSubmitButton = () => {
  return (
        <div onClick={submitWeapon} className="continueButtonWrapper">
          <h3 className="continueButtonText">CONTINUE</h3>
        </div>
  )
}

const continueToAreaOneButton = () => {
    return (
      <div onClick={continueToAreaOneSubmit} className="continueButtonWrapper">
        <h3 className="continueButtonText">CONTINUE</h3>
      </div>
    );
}

    const getPlayerName = () => {
       return (
         <div>
             <h3>What is thy name, Comedian Slayer?</h3>
             <input
               onChange={(event) => setName(event.target.value)}
               value={name}
             />

             <button onClick={submitName} type="button">
               Submit
             </button>

         </div>
       );
}

const renderAreaOne = () => {
  return (
<h3>{AREAONE.one}</h3>

  )
}

  return (
    <div className="homeWrapper">
      <div className="headerWrapper">
        <div className="headerColOne">
          <h1>Column 1</h1>
        </div>
        <div className="headerColTwo">
          <h1>KILLING CARROT TOP</h1>
        </div>
      </div>
      <div className="statWrapper">
        <Stats
          hitPoints={hitPoints}
          damage={damage}
          weapon={weapon}
          name={name}
          defence={defence}
        />
        <div className="statColTwo">
          <h1>Pictures Here</h1>
        </div>
      </div>

      <div className="gameWindowWrapper">
        {getPlayerNameDisplayed && getPlayerName()}
        {getWeaponDisplayed && renderWeaponChoice()}
        {isWeaponsChoiceButtonDisplayed && renderWeaponChoiceSubmitButton()}
        {postRenderWeaponChoiceText && renderPostWeaponChoiceText()}
        {isAreaOneDisplayed && renderAreaOne()}
      </div>
      {/* <div className="carrotTopImageHomeWraper">
        <img className="carrotTopImageHome" src={carrotTop} />
      </div> */}
    </div>
  );
};

export default Home;
