import { BOARD_SIZE, TURN_ADD, GAME_STATE_DONE } from '../constants/game'
import { getEmptyMidCell } from '../utils/game'
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
      const { row, col, symbol } = action.payload;

      let board = [...state.board];
      let movePrep = {
        row,
        col,
        symbol,
        turns: 0
      }

      // delete preparations of previous cell
      if(state.movePrep) {
        if(state.movePrep.row !== row || state.movePrep.col !== col) board[state.movePrep.row][state.movePrep.col] = {
          turns: 0,
          prepare: false
        }
      } else {
        const emptyMidCell = getEmptyMidCell(board);
        movePrep.row = emptyMidCell.row;
        movePrep.col = emptyMidCell.col;
      }

      //const newTurns = (turnAction === TURN_ADD) ? Number(String(board[row][col].turns) + turns) : Number(String(board[row][col].turns).slice(0, -1));

      board[movePrep.row][movePrep.col] = {
        turns: 0,
        prepare: true
      };
      
      return {
        ...state,
        board,
        movePrep
      }
    
    case actions.LOAD_GAME:
      return {
        ...state,
        ...action.payload
      } 

    case actions.GAME_CHANGE:
      return {
        ...state,
        ...action.payload
      };

    case actions.GAME_END:


      return {
        ...state,
        state: GAME_STATE_DONE
      };

    case actions.ADD_PLAYER:
      return {
        ...state,
        players: [...state.players, action.payload]
      };

    default:
      return state;
  }
}

export default game