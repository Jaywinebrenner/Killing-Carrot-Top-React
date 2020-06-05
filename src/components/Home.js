import React, {useState} from "react";
import { INTRO } from "../constants/Story";
import { AREAONE } from "../constants/Story";
import carrotTop from "../media/carrot-top.png";
import { Link } from "react-router-dom";
import Stats from './Stats'
import { WEAPONS } from "../constants/Weapons";

const Home = () => {

console.log("WEAPONS NAME", WEAPONS[0].name);

    let handDamage =  Math.floor(Math.random() * 2) + 1
    let butterKnifeDamage = Math.floor(Math.random() * 3) + 1;
     let trashCanLidDamage = Math.floor(Math.random() * 4) + 1;
     let twoByFourDamage = Math.floor(Math.random() * 5) + 1;


     
     
    // RENDER BOOLEANS
    const [doesGetWeaponExist, setDoesGetWeaponExist] = useState(true)
    const [doesGetPlayerNameExist, setDoesGetPlayerNameExist] = useState(true);


     const [damage, setDamage] = useState(1);
     const [name, setName] = useState(null)
     const [hitPoints, setHitPoints] = useState(20)
     const [weapon, setWeapon] = useState("Hands");

     
const handleName = () => {
  setDoesGetPlayerNameExist(false)
}

const handleSetButterKnife = () => {
  setWeapon(WEAPONS[1].name)
  setDamage(WEAPONS[1].damageString)
}

const handleSetTrashCanLid = () => {
  setWeapon(WEAPONS[2].name);
  setDamage(WEAPONS[2].damageString);
};

const handleSetTwoByFour = () => {
  setWeapon(WEAPONS[3].name);
  setDamage(WEAPONS[3].damageString);
};

const handleTakeNothing = () => {
  setWeapon(WEAPONS[0].name);
  setDamage(WEAPONS[0].damageString);
};

const submitWeapon = () => {
  console.log("hi");
  
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
      <div onClick={submitWeapon} className="continueButtonWrapper">
        <h3 className="continueButtonText">CONTINUE</h3>
      </div>
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

             <button onClick={handleName} type="button">
               Submit
             </button>

         </div>
       );
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
          setHitPoints= {setHitPoints}
          damage={damage}
          setDamage={setDamage}
          weapon={weapon}
          setWeapon={setWeapon}
          name={name}
          setName={setName}
        />
        <div className="statColTwo">
          <h1>Pictures Here</h1>
        </div>
      </div>

      <div className="gameWindowWrapper">
        {doesGetPlayerNameExist 
        ? getPlayerName()
        : renderWeaponChoice()
        }
        
        {/* {getPlayerName()}
        {renderWeaponChoice()} */}
      </div>
      {/* <div className="carrotTopImageHomeWraper">
        <img className="carrotTopImageHome" src={carrotTop} />
      </div> */}
    </div>
  );
};

export default Home;
