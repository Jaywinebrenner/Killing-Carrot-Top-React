import React, {useState} from "react";
import { INTRO } from "../constants/Story";
import { AREAONE } from "../constants/Story";
import carrotTop from "../media/carrot-top.png";
import { Link } from "react-router-dom";

const Home = () => {

    const [name, setName] = useState(null)
console.log(name);


    const getPlayerInfo = () => {
       return (
         <div>
           <form>
          <h1>What is they name, Comedian Slayer?</h1>
               <input
                 type="text" 
                 value={name}
                 onChangeText={setName}
               />
             <input type="submit" value="Submit" />
           </form>
      
         </div>
       );
}



  return (
    <div className="introWrapper">
      <h1 className="header">KILLING CARROT TOP</h1>
      <div className="introTextWrapper"> {getPlayerInfo()} </div>

      <div className="carrotTopImageHomeWraper">
        <img className="carrotTopImageHome" src={carrotTop} />
      </div>
    </div>
  );
};

export default Home;
