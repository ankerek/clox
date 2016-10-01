import * as actions from '../constants/actions'
import { checkWin } from '../utils/game'

export function loadGame(payload) {
  return {
    type: actions.LOAD_GAME,
    payload
  };  
}

export function prepareMove(payload) {
  return {
    type: actions.PREPARE_MOVE,
    payload
  };  
}

export function move(payload) {
  return {
    type: actions.MOVE,
    payload,
    remote: 'game move'
  };  
}

export function gameChange(payload) {
  return {
    type: actions.GAME_CHANGE,
    payload
  };  
}

export function gameEnd(payload) {

  console.log('gameEndACtion', 'end');

  return {
    type: actions.GAME_END,
    payload
  };  
}

export function addPlayer(payload, remote = false) {
  return {
    type: actions.ADD_PLAYER,
    payload,
    remote: remote ? 'add player' : null
  }
}