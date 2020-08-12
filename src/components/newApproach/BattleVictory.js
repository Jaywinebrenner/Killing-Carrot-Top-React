import { DEAD } from "../../constants/Story";
import React, { useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import Game from "./Game";

const BattleVictory = (props, { isRunVisible, setCreateCharacterVisible }) => {
  const [victoryMessage, setVictoryMessage] = useState(true);
  const [pushedContinue, setPushedContinue] = useState(false);
  const [lootOptionsVisible, setLootOptionsVisible] = useState(false);
  const [lootResultYes, setLootResultYes] = useState(false);
  const [lootResultNo, setLootResultNo] = useState(false);

  // Prop passed via Redirect Component on BattleNewApproach
  // let setCreateCharacterVisible= props.location.setCreateCharacterVisible;

  // Prop passed from battle victory componen

  const renderVictoryMessage = () => {
    return (
      <div className="deadWrapper">
        <h5 className="deadText">
          With one last crushing blow, Emo Philips lets out an ungodly howl and
          begins to convulse. His marionette-like frame swivels in your
          direction. "You will never topple The Illuminati of Laughter," he
          squeaks with a mild smirk on his blood-soaked face. He shoots you one
          final wild-eyed stare and crumples to the ground. You are...
        </h5>
        <h1 className="areDeadText">VICTORIOUS</h1>
        <h1
          className="tryAgainButtonWrapper"
          onClick={() => {
            setVictoryMessage(false);
            setLootOptionsVisible(true);
          }}
        >
          Continue
        </h1>
      </div>
    );
  };

  const renderLootOptions = () => {
    return (
      <div className="lootWrapper">
        <h5 className="lootTextSubheader">
          You stand triumphantly over this fallen Lilth Menace and pick up the
          severed human hand which he threw at your feet. All that make you
          human yearns to resist feasting on this wretched thing for sustanance,
          yet your stomach says otherwise...
        </h5>
        <h5 className="lootText">Do you eat the severed human hand?</h5>

        <h1
          className="lootButtonWrapper"
          onClick={() => {
            setLootResultYes(true);
            setLootOptionsVisible(false);
          }}
        >
          Yes
        </h1>
        <h1
          className="lootButtonWrapper"
          onClick={() => {
            setLootResultNo(true);
            setLootOptionsVisible(false);
          }}
        >
          No
        </h1>
      </div>
    );
  };

  const renderLootResultYes = () => {
    if (lootResultYes)
      return (
        <div className="lootWrapper">
          <h5 className="lootTextSubheader">
            You close your eyes and dig your teeth into the meat and tendon
            which cling to the hand. The taste of garlic, chives and sumptious
            flesh fill your mouth. You feel no regret. You receive 7 hit points.
          </h5>

          {/* <h1 color="primary" className="px-4" onClick={goBackToGame()}>
            Go to game
          </h1> */}
          <Link
            className="linkButton"
            onClick={() => {
              goBackToGame();
            }}
            style={{ textDecoration: "none", color: "white" }}
            to="/Game"
          >
            Continue
          </Link>
        </div>
      );
  };

  const history = useHistory();

  const goBackToGame = () => {
    setCreateCharacterVisible(false);
    setLootResultYes(false);
    setLootResultNo(false);
    history.push("/Game");
  };

  const renderLootResultNo = () => {
    if (lootResultNo) {
      return (
        <div>
          <h5>
            You are filled with disgust at the thought of entertaining eating a
            human hand. This hand, after all, likely belonged to some poor
            broken soul fallen victim to these vile comedic overlords. You
            gingerly place some debris over the appendage and clench your fist.
          </h5>
          <Link
            className="linkButton"
            onClick={() => {
              goBackToGame();
            }}
            style={{ textDecoration: "none", color: "white" }}
            to="/Game"
          >
            Continue
          </Link>
        </div>
      );
    }
  };

  return (
    <React.Fragment>
      {victoryMessage && renderVictoryMessage()}
      {lootResultYes && renderLootResultYes()}
      {lootResultNo && renderLootResultNo()}
      {lootOptionsVisible && renderLootOptions()}
    </React.Fragment>
  );
};

export default BattleVictory;
