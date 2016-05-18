import * as actions from '../constants/actions'
import { checkWin } from '../utils/game'

export function move(move) {

	return (dispatch, getState) => {

		//const { game } = store.getState();
		

		dispatch({
			type: actions.MOVE,
			move
		});

		const { game: { board } } = getState()

    console.log(checkWin({ board, ...move }))
	}
	
}