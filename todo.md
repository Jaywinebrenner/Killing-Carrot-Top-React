Need to either: 

Use Redux to manage state...

figure out how to call setCreateCharacterVisible(false) in BattleVictory in Game.js without getting the Unmounted Component error. Very unclear why it's not working, likely due to routing as I don't understand it. 

Currently wired up to go to ChapterTwo upon completeing Battle Victory. It would be ideal to go back to Game, make the createCharacterVisble false and then call ChapterTwo from here in Game. Then being able to pass state without a prop drilling nightmare. To get back to this state, uncomment 86 - 90 / 100 - 106