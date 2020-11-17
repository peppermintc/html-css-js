'use strict';

import Game from './game.js';
import PopUp from './popup.js';

const CARROT_COUNT = 20;
const BUG_COUNT = 20;
const GAME_DURATION_SEC = 20;

const gameFinishBanner = new PopUp();
const game = new Game(20, 20, 20);
game.setGameStopListener((reason) => {
  console.log(reason);
  let message;
  switch(reason) {
    case 'cancel':
      message = 'Replay?';
      break;
    case 'win':
      message = 'YOU WON!';
      break;
    case 'lose':
      message = 'YOU LOSE!';
      break;
    default:
      throw new Error('not valid reason');
  }
  gameFinishBanner.showWithText(message);
});

gameFinishBanner.setClickListener(() => {
  game.start();
});