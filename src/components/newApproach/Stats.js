import React from "react";


const Stats = ( { hitPoints, name, weapon, damage, defence, damageString, armor}) => {

   
    
  return (
    <div className="statColOne">
      <h2>Comedian Slayer</h2>
      <h4 className="statText">Name: {name}</h4>
      <h4 className="statText">Hit Points: {hitPoints}</h4>
      <h4 className="statText">Armor: {armor}</h4>
      <h4 className="statText">Defence: {defence}</h4>
      <h4 className="statText">Weapon: {weapon}</h4>
      <h4 className="statText">Damage: {damageString}</h4>
    </div>
  );
};

export default Stats;
