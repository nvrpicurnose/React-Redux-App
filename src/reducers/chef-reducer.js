import { POST_MEAL, EDIT_MEAL, MEAL_LIST } from '../actions/ActionTypes';

const INITIAL_STATE = {
	
};

export default function chefReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

	  case POST_MEAL:
	    return state;

	  case EDIT_MEAL:
	    return state;

	  case MEAL_LIST:
	    return state;

	  default:
	    return state;

  }
}
