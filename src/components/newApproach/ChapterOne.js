import React, {useState} from 'react'
import { AREAONE } from "../../constants/Story";
import Battle from '../Battle';



const ChapterOne = ({
  armor,
  setBattleEmo,
  battleEmo,
  setIsEmoImageVisible,
}) => {
  const [one, setOne] = useState(true);
  const [two, setTwo] = useState(false);
  const [isAreaOneDisplayed, setIsAreaOneDisplayed] = useState(false);
  const [isAreaOneThreeDisplayed, setIsAreaOneThreeDisplayed] = useState(false);
  const [isAreaOneFourDisplayed, setIsAreaOneFourDisplayed] = useState(false);
  const [isAreaOneFiveDisplayed, setIsAreaOneFiveDisplayed] = useState(false);
  const [isAreaOneSixDisplayed, setIsAreaOneSixDisplayed] = useState(false);

  const renderOne = () => {

    return (
      <div>
        <h1>Chapter One</h1>
        <h5>Domain of Thy Unspeakable Lilth Menace</h5>
        <div
          onClick={() => {
            setOne(false);
            setTwo(true);
          }}
          className="beginThyAdventureButtonText"
        >
          <h3 className="continueButtonText">CONTINUE</h3>
        </div>
      </div>
    );
  };

  const renderTwo = () => {
    return (
      <div>
        <h3>{AREAONE.one}</h3>
        <h3>{AREAONE.two}</h3>
        <h3>Do you:</h3>
        <div className="answerGridWrapper">
          <div className="answerGridOne" id="butterKnifeSelection">
            <h5 onClick={handleAreaOneThree}>
              1 - Quietly slink by the ramshacked tent and continue forth to Ha
              Ha Tower
            </h5>
          </div>

          <div className="answerGridTwo">
            <h5 onClick={handleAreaOneFour}>
              2 - Carefully approach the tent and sumptuous smells
            </h5>
          </div>

          <div className="answerGridThree">
            <h5 onClick={handleAreaOneFive}>3 - Say, 'Is anyone there?'</h5>
          </div>

          <div className="answerGridFour">
            <h5 onClick={handleAreaOneSix}>
              4 - Hide behind a nearby dumpster to survey the tent
            </h5>
          </div>
        </div>
      </div>
    );
  };

  const handleAreaOneThree = () => {
    setTwo(false);
    setIsAreaOneThreeDisplayed(true);
  };

  const renderAreaOneThree = () => {
    if (armor === "Naked") {
      return (
        <div>
          <h3>{AREAONE.three}</h3>
          <div onClick={console.log("to do")} className="continueButtonWrapper">
            <h3 className="continueButtonText">CONTINUE</h3>
          </div>
        </div>
      );
    } else {
      return (
        <div>
          <h3>
            As you begin to quietly slink through the area, your {armor} gently
            scrapes against an errant spire of rebar protruding from the
            crumbling debris.{AREAONE.eight}
          </h3>
          <div
            onClick={() => {
              setBattleEmo(true);
              setIsEmoImageVisible(true);
              setIsAreaOneThreeDisplayed(false);
            }}
            className="continueButtonWrapper"
          >
            <h3 className="continueButtonText">CONTINUE</h3>
          </div>
        </div>
      );
    }
  };

  const handleAreaOneFour = () => {
    setTwo(false);
    setIsAreaOneFourDisplayed(true);
    // setIsEmoImageVisible(true);
  };
  const renderAreaOneFour = () => {
    return (
      <div>
        <h3>{AREAONE.four}</h3>
        <div
          onClick={() => {
            setIsAreaOneFourDisplayed(false);
            setBattleEmo(true);
            setIsEmoImageVisible(true);
          }}
          className="continueButtonWrapper"
        >
          <h3 className="continueButtonText">CONTINUE</h3>
        </div>
      </div>
    );
  };

  const handleAreaOneFive = () => {
    setTwo(false);
    setIsAreaOneFiveDisplayed(true);
  };
  const renderAreaOneFive = () => {
    return (
      <div>
        <h3>{AREAONE.five}</h3>
        <div
          onClick={() => {
            setBattleEmo(true);
            setIsAreaOneFiveDisplayed(false);
            setIsEmoImageVisible(true);
          }}
          className="continueButtonWrapper"
        >
          <h3 className="continueButtonText">CONTINUE</h3>
        </div>
      </div>
    );
  };

  const handleAreaOneSix = () => {
    setTwo(false);
    setIsAreaOneSixDisplayed(true);
  };
  const renderAreaOneSix = () => {
    return (
      <div>
        <h3>{AREAONE.six}</h3>
        <h3>{AREAONE.seven}</h3>
        <div
          onClick={() => {
            setBattleEmo(true);
            setIsAreaOneSixDisplayed(false);
            setIsEmoImageVisible(true);
          }}
          className="emoButtonWrapper"
        >
          <h3 className="emoButtonText">CONTINUE</h3>
        </div>
      </div>
    );
  };

  return (
    <div>
      {one && renderOne()}
      {two && renderTwo()}
      {isAreaOneThreeDisplayed && renderAreaOneThree()}
      {isAreaOneFourDisplayed && renderAreaOneFour()}
      {isAreaOneFiveDisplayed && renderAreaOneFive()}
      {isAreaOneSixDisplayed && renderAreaOneSix()}
    </div>
  );
};

export default ChapterOne