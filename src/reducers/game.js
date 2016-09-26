import { BOARD_SIZE, TURN_ADD } from '../constants/game'
import * as actions from '../constants/actions'

let board = [];

for (let i = 0; i < BOARD_SIZE; i++) {
  board.push([]);

  for (let j = 0; j < BOARD_SIZE; j++) {
    board[i].push(0);
  }
}

const initialState = {
  board,
  round: 1,
  turn: null,
  state: 0,
  players: [],
  movePrep: null
}

const game = (state = initialState, action) => {

  switch(action.type) {

    case actions.PREPARE_MOVE:
      const { row, col, turns, player, turnAction } = action.result;

      let board = [...state.board];

      // delete preparations of previous cell
      if(state.movePrep && (state.movePrep.row !== row || state.movePrep.col !== col)) board[state.movePrep.row][state.movePrep.col] = {
        prepare: false,
        turns: 0
      }

      let newTurns = (turnAction === TURN_ADD) ? Number(String(board[row][col].turns) + turns) : Number(String(board[row][col].turns).slice(0, -1));

      board[row][col] = {
        turns: newTurns,
        prepare: true
      };
      
      return {
        ...state,
        board,
        movePrep: {
          row,
          col,
          player,
          turns: newTurns
        }
      }
    
    case actions.LOAD_GAME:
      return {
        ...state,
        ...action.result
      } 

    case actions.GAME_CHANGE:
      return {
        ...state,
        ...action.result
      };

    case actions.ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, action.result]
      };

    default:
      return state;
  }
}

export default game