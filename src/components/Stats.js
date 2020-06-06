import React from "react";
import { INTRO } from "../constants/Story";
import { AREAONE } from "../constants/Story";
import carrotTop from "../media/carrot-top.png";
import { Link } from "react-router-dom";

const Stats = ( { hitPoints, name, weapon, damage, defence}) => {

   
    
  return (
    <div className="statColOne">
      <h2>Comedian Slayer</h2>
      <h4 className="statText">Name: {name}</h4>
      <h4 className="statText">Hit Points: {hitPoints}</h4>
      <h4 className="statText">Defence: {defence}</h4>
      <h4 className="statText">Weapon: {weapon}</h4>
      <h4 className="statText">Damage: {damage}</h4>
    </div>
  );
};

export default Stats;
