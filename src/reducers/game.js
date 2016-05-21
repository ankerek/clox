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
	board,
	round: 1,
	turn: null,
	state: 0,
	players: []
}

const game = (state = initialState, action) => {

	switch(action.type) {

		// case actions.MOVE: 
		
		// 	let board = [...state.board];
		// 	board[action.result.row][action.result.col] = action.result.userId;

		// 	return {
		// 		...state,
		// 		board
		// 	};
		
		case actions.PREPARE_MOVE:
			let board = [...state.board];
			board[action.result.row][action.result.col] = {
				lives: 0
			};
			return {
				...state,
				board
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