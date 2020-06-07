import React, {useState, useEffect} from "react";
import { INTRO } from "../constants/Story";
import { AREAONE } from "../constants/Story";
import carrotTop from "../media/carrot-top.png";
import { Link } from "react-router-dom";
import Stats from './Stats'
import { WEAPONS } from "../constants/Weapons";
import { getPlayerName } from '../constants/Renders'
import Battle from './Battle'

const Home = () => {



  // RENDER BOOLEANS

  const [damage, setDamage] = useState(1);
  const [name, setName] = useState(null)
  const [hitPoints, setHitPoints] = useState(20)
  const [defence, setDefence] = useState(0)
  const [weapon, setWeapon] = useState("Bare Hands");
  const [battleTextDisplayed, setBattleTextDisplayed] = useState(false)

  

  //1- What is thy name, Comedian Slayer?
  const [getPlayerNameDisplayed, setGetPlayerNameDisplayed] = useState(true);

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
  };

const submitName = () => {
  setGetPlayerNameDisplayed (false);
  setGetWeaponDisplayed(true)
}

//2- CHOOSING A WEAPON--Before you embark on your perilous journey, you must pick one of three weapons at your disposal.
  const [getWeaponDisplayed, setGetWeaponDisplayed] = useState(false);
  const [
    isWeaponsChoiceButtonDisplayed,
    setIsWeaponsChoiceButtonDisplayed,
  ] = useState(false);

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
  };
  const renderWeaponChoiceSubmitButton = () => {
    return (
      <div onClick={submitWeapon} className="continueButtonWrapper">
        <h3 className="continueButtonText">CONTINUE</h3>
      </div>
    );
  };

  
  //3- AFTER WEAPON SELECTION
 const [postRenderWeaponChoiceText, setPostRenderWeaponChoiceText] = useState(
   false,
 );
  const renderPostWeaponChoiceText = () => {
      if (weapon === "Bare Hands") {
      return (
        <div>
          <h3>{WEAPONS[0].weaponPickUp}</h3>
          <div
            onClick={continueToAreaOneSubmit}
            className="beginThyAdventureButtonText"
          >
            <h3 className="continueButtonText">BEGIN THY ADVENTURE</h3>
          </div>
        </div>
      );
    }
      if (weapon === "Butter Knife") {
          return (
            <div>
              <h3>{WEAPONS[1].weaponPickUp}</h3>
              <div
                onClick={continueToAreaOneSubmit}
                className="beginThyAdventureButtonText"
              >
                <h3 className="continueButtonText">BEGIN THY ADVENTURE</h3>
              </div>
            </div>
          );
    }
        if (weapon === "Trash Can Lid") {
         return (
           <div>
             <h3>{WEAPONS[2].weaponPickUp}</h3>
             <div
               onClick={continueToAreaOneSubmit}
               className="beginThyAdventureButtonText"
             >
               <h3 className="continueButtonText">BEGIN THY ADVENTURE</h3>
             </div>
           </div>
         );
    }
        if (weapon === "Broken 2x4") {
      return (
        <div>
          <h3>{WEAPONS[3].weaponPickUp}</h3>
          <div
            onClick={continueToAreaOneSubmit}
            className="beginThyAdventureButtonText"
          >
            <h3 className="continueButtonText">BEGIN THY ADVENTURE</h3>
          </div>
        </div>
      );
    }
  }

    const continueToAreaOneSubmit = () => {
      setIsAreaOneDisplayed(true);
      setPostRenderWeaponChoiceText(false);
    };


// AREA ONE
  const [isAreaOneDisplayed, setIsAreaOneDisplayed] = useState(false);
  const [isAreaOneThreeDisplayed, setIsAreaOneThreeDisplayed] = useState(false);
  const [isAreaOneFourDisplayed, setIsAreaOneFourDisplayed] = useState(false);
   const [isAreaOneFiveDisplayed, setIsAreaOneFiveDisplayed] = useState(false);
    const [isAreaOneSixDisplayed, setIsAreaOneSixDisplayed] = useState(false);

    console.log("IS AREA ONE DISPLAYED", isAreaOneThreeDisplayed);
    

    const renderAreaOne = () => {
      return (
        <div>
          <h3>{AREAONE.one}</h3>
          <h3>{AREAONE.two}</h3>
          <h3>
            Do you:
          </h3>
          <div className="answerGridWrapper">
            <div className="answerGridOne" id="butterKnifeSelection">
              <h5 onClick={handleAreaOneThree}>1 - Quietly slink by the ramshacked tent and continue forth to Prop Tower</h5>
            </div>
  
            <div className="answerGridTwo">
              <h5 onClick={handleAreaOneFour}>2 - Carefully approach the tent and sumptuous smells</h5>
            </div>
  
            <div className="answerGridThree">
              <h5 onClick={handleAreaOneFive}>3 - Say, 'Is anyone there?'</h5>
            </div>
  
            <div className="answerGridFour">
              <h5 onClick={handleAreaOneSix}>4 - Hide behind a nearby dumpster to survey the tent</h5>
            </div>
        </div>
        </div>
      );
    };



  const handleAreaOneThree = () => {
    setIsAreaOneDisplayed(false);
    setIsAreaOneThreeDisplayed(true);
    return <h2>Fart</h2>
  };
  const renderAreaOneThree = () => {
    return (
      <div>
        <h3>{AREAONE.three}</h3>
        <div onClick={console.log("to do")} className="continueButtonWrapper">
          <h3 className="continueButtonText">CONTINUE</h3>
        </div>
      </div>
    );
  };

    const handleAreaOneFour = () => {
      setIsAreaOneDisplayed(false);
      setIsAreaOneFourDisplayed(true);
    };
    const renderAreaOneFour = () => {
      return (
        <div>
          <h3>{AREAONE.four}</h3>
          <div onClick={console.log("to do - begin battle with Emo Philips")} className="continueButtonWrapper">
            <h3 className="continueButtonText">CONTINUE</h3>
          </div>
        </div>
      );
    };

        const handleAreaOneFive = () => {
      setIsAreaOneDisplayed(false);
      setIsAreaOneFiveDisplayed(true);
    };
    const renderAreaOneFive = () => {
      return (
        <div>
          <h3>{AREAONE.five}</h3>
          <div onClick={console.log("to do - begin battle with Emo Philips")} className="continueButtonWrapper">
            <h3 className="continueButtonText">CONTINUE</h3>
          </div>
        </div>
      );
    };

    const handleAreaOneSix = () => {
      setIsAreaOneDisplayed(false);
      setIsAreaOneSixDisplayed(true);
    };
    const renderAreaOneSix = () => {
      return (
        <div>
          <h3>{AREAONE.six}</h3>
          <h3>{AREAONE.seven}</h3>
          <div
            onClick={console.log("to do - begin battle with Emo Philips")}
            className="emoButtonWrapper"
          >
            <h3 className="emoButtonText">CONTINUE</h3>
          </div>
        </div>
      );
    };



  return (
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
            weapon={weapon}
            name={name}
            defence={defence}
          />
        </div>

        <div className="statColTwo">
          <h2 className="battleHeaderText">Battle Text</h2>
          <Battle
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
            battleTextDisplayed={battleTextDisplayed}
            setBattleTextDisplayed={setBattleTextDisplayed}
          />
        </div>

        <div className="statColThree">
          <h1>Pictures Here</h1>
        </div>
      </div>

      <div className="gameWindowWrapper">
        {getPlayerNameDisplayed && getPlayerName()}
        {getWeaponDisplayed && renderWeaponChoice()}
        {isWeaponsChoiceButtonDisplayed && renderWeaponChoiceSubmitButton()}
        {postRenderWeaponChoiceText && renderPostWeaponChoiceText()}
        {isAreaOneDisplayed && renderAreaOne()}
        {isAreaOneThreeDisplayed && renderAreaOneThree()}
        {isAreaOneFourDisplayed && renderAreaOneFour()}
        {isAreaOneFiveDisplayed && renderAreaOneFive()}
        {isAreaOneSixDisplayed && renderAreaOneSix()}
      </div>
      {/* <div className="carrotTopImageHomeWraper">
        <img className="carrotTopImageHome" src={carrotTop} />
      </div> */}
    </div>
  );
};

export default Home;
