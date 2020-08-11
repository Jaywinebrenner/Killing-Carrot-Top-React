import React, { useState, useEffect } from "react";
import { AREAONE } from "../../constants/Story";
import carrotTop from "../../media/carrot-top.png";
import emo from "../../media/emo.jpg";
import { WEAPONS } from "../../constants/Weapons";
import gamePlay from "../../media/gameplay.mp3";
import ReactHowler from "react-howler";

// import {
//   fourSidedDie,
//   twoSidedDie,
//   threeSidedDie,
//   sixSidedDie,
// } from "../../constants/Dice";



export const CreateCharacter = ({
         setName,
         name,
         setWeapon,
         weapon,
         setDamage,
         damage,
         damageString,
         setDamageString,
         defence,
         setDefence,
         setArmor,
         armor,
         encounterOne,
         setChapterOne,
         isGameMusicPlaying,
         toggleGamePlayMusic,
       }) => {
         const [isOneVisible, setIsOneVisible] = useState(true);
         const [isNoNameEnteredVisible, setIsNoNameVisible] = useState(false);


        // useEffect(() => {
        //   nameInput.focus();

        // }, []);

         //ONE
         const renderOne = () => {
           return (
             <div>
               <h3>What is thy name, Comedian Slayer?</h3>
               <div class="inputCursor">
                 <input
                  ref={input => input && input.focus()}
                   className="submitNameInput"
                   onChange={(event) => setName(event.target.value)}
                   value={name}
                   placeholder=""
                 />
                 <i></i>
               </div>
               {/* <button onClick={submitOne} type="button">
      Submit
    </button> */}
               <div className="submitNameButtonWrapper" onClick={submitOne}>
                 <h3 className="submitNameButtonText">Submit</h3>
               </div>
             </div>
           );
         };

         const submitOne = () => {
           if (!name) {
            setIsNoNameVisible(true);
           } else {
             setName(name);
             setIsOneVisible(false);
             setIsTwoVisible(true);
             setIsNoNameVisible(false);

           }
         };

         //TWO - Set Weapon

         const [isTwoVisible, setIsTwoVisible] = useState(false);

         const renderTwo = () => {
           return (
             <div>
               <h3>
                 Before you embark on your perilous journey, you must pick one
                 of three weapons at your disposal.
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
             </div>
           );
         };

         // 3 - After setting weapon text

         const handleSetButterKnife = () => {
           setWeapon(WEAPONS[1].name);
           setDamage(4);
           setDamageString(WEAPONS[1].damageString);
           setIsTwoVisible(false);
           setIsWeaponChoiceTextVisible(true);
         };
         const handleSetTrashCanLid = () => {
           setWeapon(WEAPONS[2].name);
           setDamage(3);
           setDamageString(WEAPONS[2].damageString);
           setIsTwoVisible(false);
           setIsWeaponChoiceTextVisible(true);
         };
         const handleSetTwoByFour = () => {
           setWeapon(WEAPONS[3].name);
           setDamage(6);
           setDamageString(WEAPONS[3].damageString);
           setIsTwoVisible(false);
           setIsWeaponChoiceTextVisible(true);
  
         };
         const handleTakeNothing = () => {
           setWeapon(WEAPONS[0].name);
           setDamage(2);
           setDamageString(WEAPONS[0].damageString);
           setIsTwoVisible(false);
           setIsWeaponChoiceTextVisible(true);
         };

         // 4 - Display weapon
         const [
           isWeaponChoiceTextVisible,
           setIsWeaponChoiceTextVisible,
         ] = useState(false);

         const [isSetArmorVisible, setIsSetArmorVisible] = useState(false);

         const renderPostWeaponChoiceText = () => {
           if (weapon === "Bare Hands") {
             return (
               <div>
                 <h3>{WEAPONS[0].weaponPickUp}</h3>
                 <div
                   onClick={() => {
                     setIsWeaponChoiceTextVisible(false);
                     setIsSetArmorVisible(true);
                     
                   }}
                   className="beginThyAdventureButtonText"
                 >
                   <h3 className="continueButtonText">CONTINUE</h3>
                 </div>
               </div>
             );
           }
           if (weapon === "Butter Knife") {
             return (
               <div>
                 <h3>{WEAPONS[1].weaponPickUp}</h3>
                 <div
                   onClick={() => {
                     setIsWeaponChoiceTextVisible(false);
                     setIsSetArmorVisible(true);
                   }}
                   className="beginThyAdventureButtonText"
                 >
                   <h3 className="continueButtonText">CONTINUE</h3>
                 </div>
               </div>
             );
           }
           if (weapon === "Trash Can Lid") {
             return (
               <div>
                 <h3>{WEAPONS[2].weaponPickUp}</h3>
                 <div
                   onClick={() => {
                     setIsWeaponChoiceTextVisible(false);
                     setIsSetArmorVisible(true);
                   }}
                   className="beginThyAdventureButtonText"
                 >
                   <h3 className="continueButtonText">CONTINUE</h3>
                 </div>
               </div>
             );
           }
           if (weapon === "Broken 2x4") {
             return (
               <div>
                 <h3>{WEAPONS[3].weaponPickUp}</h3>
                 <div
                   onClick={() => {
                     setIsWeaponChoiceTextVisible(false);
                     setIsSetArmorVisible(true);
                   }}
                   className="beginThyAdventureButtonText"
                 >
                   <h3 className="continueButtonText">CONTINUE</h3>
                 </div>
               </div>
             );
           }
         };

         // Set Armor

         const renderSetArmor = () => {
           return (
             <div>
               <h3>
                 You deem it wise to scrounge up some assemblance of defence,
                 though minimal it may be.
               </h3>
               <div className="answerGridWrapper">
                 <div className="answerGridOne" id="butterKnifeSelection">
                   <h5 onClick={handleSetHelmet}>Garden Pail Bucket Helmet</h5>
                 </div>

                 <div className="answerGridTwo">
                   <h5 onClick={handleSetChestPlate}>
                     Bubble Wrap Chest Plate
                   </h5>
                 </div>

                 <div className="answerGridThree">
                   <h5 onClick={handleSetGloves}>Garbage Bag Gloves</h5>
                 </div>

                 <div className="answerGridFour">
                   <h5 onClick={handleWearNothing}>You wear nothing</h5>
                 </div>
               </div>
             </div>
           );
         };

         const [
           isArmorChoiceTextVisible,
           setIsArmorChoiceTextVisible,
         ] = useState(false);

         const renderArmorChoice = () => {
           // Render Armor Choice

           if (armor === "Garden Pail Bucket Helmet") {
             return (
               <div>
                 <h3>
                   You slowly place the pail on your head- it's eye sockets
                   aligning perfectly with the symetry of your forlorn,
                   weathered face.
                 </h3>
                 <div
                   onClick={() => {
                     setIsArmorChoiceVisible(false);
                     setChapterOne(true);
                   }}
                   className="beginThyAdventureButtonText"
                 >
                   <h3 className="continueButtonText">BEGIN THY ADVENTURE</h3>
                 </div>
               </div>
             );
           }
           if (armor === "Bubble Wrap Chest Plate") {
             return (
               <div>
                 <h3>
                   You stretch several shredded rolls of bubble wrap around your
                   torso. You squeeze a solitary bubble pocket and imagine it's
                   resulting snap being that of Carrot Top himself's neck.{" "}
                 </h3>
                 <div
                   onClick={() => {
                     setIsArmorChoiceVisible(false);
                     setChapterOne(true);
                   }}
                   className="beginThyAdventureButtonText"
                 >
                   <h3 className="continueButtonText">BEGIN THY ADVENTURE</h3>
                 </div>
               </div>
             );
           }
           if (armor === "Garbage Bag Gloves") {
             return (
               <div>
                 <h3>
                   You weave the filth strewn plastic around each and every
                   digit. You raise your newly gloved hand up to the moonlight
                   and slowly clench your fist with forlorn purpose.
                 </h3>
                 <div
                   onClick={() => {
                     setIsArmorChoiceVisible(false);
                     setChapterOne(true);
                   }}
                   className="beginThyAdventureButtonText"
                 >
                   <h3 className="continueButtonText">BEGIN THY ADVENTURE</h3>
                 </div>
               </div>
             );
           }
           if (armor === "Naked") {
             return (
               <div>
                 <h3>
                   You look down upon your gaunt, filth strewn body. "I need not
                   such distractions as clothes to end this vile scrourge," you
                   mutter under your breath with forlorn purpose.
                 </h3>
                 <div
                   onClick={() => {
                     setIsArmorChoiceVisible(false);
                     setChapterOne(true);
                   }}
                   className="beginThyAdventureButtonText"
                 >
                   <h3 className="continueButtonText">BEGIN THY ADVENTURE</h3>
                 </div>
               </div>
             );
           }
         };

         const [isArmorChoiceVisible, setIsArmorChoiceVisible] = useState(
           false,
         );

         const handleSetHelmet = () => {
           setArmor("Garden Pail Bucket Helmet");
           setDefence(8);
           setIsSetArmorVisible(false);
           setIsArmorChoiceVisible(true);
         };
         const handleSetChestPlate = () => {
           setArmor("Bubble Wrap Chest Plate");
           setDefence(9);
           setIsSetArmorVisible(false);
           setIsArmorChoiceVisible(true);
         };
         const handleSetGloves = () => {
           setArmor("Garbage Bag Gloves");
           setDefence(6);
           setIsSetArmorVisible(false);
           setIsArmorChoiceVisible(true);
         };
         const handleWearNothing = () => {
           setArmor("Naked");
           setDefence(5);
           setIsSetArmorVisible(false);
           setIsArmorChoiceVisible(true);
         };

         const renderNoNameVisible = () => {
           return (
             <h1>ENTER THY NAME, COMEDIAN SLAYER!</h1>
           )
         }


         return (
           <React.Fragment>
             {/* {isOneVisible && name != '' ? renderOne : <h1>ENTER THY NAME!</h1>} */}
             {isOneVisible && renderOne()}
             {isTwoVisible && renderTwo()}
             {isWeaponChoiceTextVisible && renderPostWeaponChoiceText()}
             {isSetArmorVisible && renderSetArmor()}
             {isArmorChoiceVisible && renderArmorChoice()}
             {isNoNameEnteredVisible && renderNoNameVisible()}
             {/* <ReactHowler
               src={gamePlay}
               volume={0.4}
               loop={true}
               playing={isGameMusicPlaying}
             /> */}
           </React.Fragment>
         );
       };

