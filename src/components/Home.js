import React, {useState} from "react";
import { INTRO } from "../constants/Story";
import { AREAONE } from "../constants/Story";
import carrotTop from "../media/carrot-top.png";
import { Link } from "react-router-dom";
import Stats from './Stats'

const Home = () => {


    let handDamage =  Math.floor(Math.random() * 2) + 1
    let butterKnife = Math.floor(Math.random() * 3) + 1;
     let trashCanLid = Math.floor(Math.random() * 4) + 1;
     let twoByFour = Math.floor(Math.random() * 5) + 1;


     
     
     
     const [damage, setDamage] = useState(handDamage);
     const [name, setName] = useState(null)
     const [hitPoints, setHitPoints] = useState(20)
     console.log("NAME", name);
     console.log("DAMAGE", damage);
     console.log("HIT POINTS", hitPoints);
     

const handleName = () => {
  setName(name)
  
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
          <h5 onClick={() => setDamage(butterKnife)}>A butter knife</h5>
        </div>

        <div className="answerGridTwo">
          <h5 onClick={() => setDamage(trashCanLid)}>A trash can lid</h5>
        </div>

        <div className="answerGridThree">
          <h5 onClick={() => setDamage(twoByFour)}>A shower rod</h5>
        </div>

        <div className="answerGridFour">
          <h5 onClick={() => setDamage(handDamage)}>Take nothing</h5>
        </div>
      </div>
    </div>
  );
}

    const getPlayerInfo = () => {
       return (
         <div>
           <form>
             <h3>What is thy name, Comedian Slayer?</h3>
             <input
               onChange={(event) => setName(event.target.value)}
               value={name}
             />

             <button onClick={handleName} type="button">
               Submit
             </button>
           </form>
            <h3>Greetings, {name}</h3>;


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
          // setHitPoints= {setHitPoints}
        />


        <div className="statColTwo">
          <h1>Pictures Here</h1>
        </div>
      </div>

      <div className="introTextWrapper">
        {getPlayerInfo()}
        {renderWeaponChoice()}
      </div>
      {/* <div className="carrotTopImageHomeWraper">
        <img className="carrotTopImageHome" src={carrotTop} />
      </div> */}
    </div>
  );
};

export default Home;
