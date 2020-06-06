import React from "react";
import { INTRO } from "../constants/Story";
import { AREAONE } from "../constants/Story";
import carrotTop from "../media/carrot-top.png";
import { Link } from "react-router-dom";

const Stats = ( { hitPoints, name, weapon, damage, defence}) => {

   
    
  return (
    <div className="statColOne">
      <h2>Comedian Slayer</h2>
      <h3>Name: {name}</h3>
      <h3>Hit Points: {hitPoints}</h3>
      <h3>Defence: {defence}</h3>
      <h3>Weapon: {weapon}</h3>
      <h3>Damage: {damage}</h3>
    </div>
  );
};

export default Stats;
