import * as actions from '../constants/actions'
import { checkWin } from '../utils/game'

export function loadGame(result) {
	return {
		type: actions.LOAD_GAME,
		result
	};	
}

export function prepareMove(result) {
	return {
		type: actions.PREPARE_MOVE,
		result
	};	
}

export function move(result) {
	return {
		type: actions.MOVE,
		result,
		remote: 'game move'
	};	
}

export function gameChange(result) {
	return {
		type: actions.GAME_CHANGE,
		result
	};	
}

export function addPlayer(result, remote = false) {
	return {
		type: actions.ADD_PLAYER,
		result,
		remote: remote ? 'add player' : null
	}
}