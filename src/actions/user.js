import * as actions from '../constants/actions'

export function getUser(payload) {

  return {
    type: actions.GET_USER,
    payload
  };
}