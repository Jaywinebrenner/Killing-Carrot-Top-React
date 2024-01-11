import React, {useState} from "react";
import { INTRO } from "../../constants/Story";
import carrotTop from '../../media/carrot-top-10-1.png'
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
import ReactHowler from "react-howler";
import theme from "../../media/theme1.mp3";


const Intro = () => {
  const [isCarrotTopVisible, setIsCarrotTopVisible] = useState(false)



    setTimeout(function () {
      setIsCarrotTopVisible(true)
  
    }, 5000)
  // its 50,000 in reality

    const renderCarrotTopImage = () => {
      return (
        <React.Fragment>
          {/* <Link style={{ textDecoration: "none" }} to="/Game">
            <h1 className="landingContinueButton">CONTINUE</h1>
          </Link> */}
          {/* <div className="carrotTopImageIntroTwo-wrapper">
            <img className="carrotTopImageIntroTwo" src={carrotTop} />
          </div> */}
        </React.Fragment>
      );
      }

const renderIntroText = () => {
  return (
    <div>
      {/* <ReactAudioPlayer src="../../media/theme1.mp3" autoPlay controls /> */}
      <h1 className="introHeader">The Beginning</h1>

      <h3 className="storyText">
        {" "}
        <Typewriter
          className="introHeader"
          onInit={(typewriter) => {
            typewriter
              .changeDelay(80)
              .typeString(
                "Spawned from the fetid and petulant comedy clubs from the dark edges of a collapsed civilization, you embark on your singular journey to eliminate the Illuminati of Laughter - a sinister coalition of comedians hell bent on the annihilation of the human race.",
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              .start();
          }}
        />
      </h3>

      <h3 className="storyText">
        {" "}
        <Typewriter
          options={{
            strings: ["Hello", "World"],
            autoStart: false,
          }}
          className="introHeader"
          onInit={(typewriter) => {
            typewriter
              .pauseFor(22000)
              .changeDelay(80)
              .typeString(
                "You are the Comedian Slayer, humanity's last bastion of hope against this vile scourge.",
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </h3>

      <h3 className="storyText">
        {" "}
        <Typewriter
          options={{
            strings: ["Hello", "World"],
            autoStart: false,
          }}
          className="introHeader"
          onInit={(typewriter) => {
            typewriter
              .pauseFor(30000)
              .changeDelay(80)
              .typeString(
                "You must infiltrate the elite comedy circuit of this malevolent assemblage and assassinate the Diabolical Lord of Laughter himself - Carrot Top. It will be a perilous journey filled with violence, mayhem, depravity and suffering.",
              )
              .callFunction(() => {
                console.log("String typed out!");
              })
              .callFunction(() => {
                console.log("All strings were deleted");
              })
              .start();
          }}
        />
      </h3>
      {/* <Link style={{ textDecoration: "none" }} to="/Game">
        <h1 className="landingContinueButton">CONTINUE</h1>
      </Link> */}
    </div>
  );
};

    return (
      // <div className="introWholeWrapper">
      <div className="introWholeWrapper">
        <ReactHowler src={theme}  
        volume={0.4} 
        loop={true}
        />
        <div className="introTextWrapper"> {renderIntroText()} </div>
        {/* <img className="carrotTopImageIntroTwo" src={carrotTop} /> */}
        <div className="introImageWrapper">
          {isCarrotTopVisible && renderCarrotTopImage()}
        </div>
        <div className="carrotTopImageIntroTwo-wrapper">
            <img className="carrotTopImageIntroTwo" src={carrotTop} />
        </div>
        <Link style={{ textDecoration: "none" }} to="/Game">
          <h1 className="landingContinueButton">CONTINUE</h1>
        </Link>
      </div>
      // </div>
    );
}

export default Intro