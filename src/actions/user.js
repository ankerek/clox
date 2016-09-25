import * as actions from '../constants/actions'

export function getUser(result) {

  return {
    type: actions.GET_USER,
    result
  };
}