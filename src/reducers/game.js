import { BOARD_SIZE } from '../constants'
import * as actions from '../constants/actions'

let board = [];

for (let i = 0; i < BOARD_SIZE; i++) {
  board.push([]);

  for (let j = 0; j < BOARD_SIZE; j++) {
    board[i].push(0);
  }
}

const initialState = {
	board
}

const game = (state = initialState, action) => {

	switch(action.type) {

		case actions.MOVE: 
		
			let board = [...state.board];
			board[action.move.row][action.move.col] = 2;

			return {
				...state,
				board
			};

		default:
			return state;
	}
}

export default game