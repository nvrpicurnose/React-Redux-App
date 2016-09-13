import { GET_CHEFS } from '../actions/ActionTypes';
import { getChefs } from '../api/get_data';

const INITIAL_STATE = {
	chefs: []
};

export default function chefsReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

	  case "GET_CHEFS":
	  	const chefs = getChefs();
	    const newState = {
	    	chefs: state.chefs.concat(chefs)
	    }
	  	return newState;

	  default:
	    return state;

  }
}
