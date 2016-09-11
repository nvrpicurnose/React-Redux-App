import { SUBSCRIBE_MEAL, DECREASE_WALLET } from '../actions/ActionTypes';

const INITIAL_STATE = {

};

export default function walletReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

	  case SUBSCRIBE_MEAL:
	    return state;

	  case DECREASE_WALLET:
	    return state;

	  default:
	    return state;

  }
}
