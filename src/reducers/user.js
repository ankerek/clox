import * as actions from '../constants/actions'

const initialState = {
	id: null
}

const user = (state = initialState, action) => {

	switch(action.type) {

		case actions.GET_USER: 
			console.log(action)
			return {
				...state,
				id: action.result.id
			};

		default:
			return state;
	}
}

export default user