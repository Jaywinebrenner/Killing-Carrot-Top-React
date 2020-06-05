import React from "react";
import { INTRO } from "../constants/Story";
import { AREAONE } from "../constants/Story";
import carrotTop from "../media/carrot-top.png";
import { Link } from "react-router-dom";

const Stats = ( { hitPoints, name, weapon}) => {

  return (
    <div className="statColOne">
      <h2>Comedian Slayer</h2>
      <h3>Name:</h3>
      <h3>Hit Points: {hitPoints}</h3>
      <h3>Weapon: </h3>
    </div>
  );
};

export default Stats;
