import { GET_CHEFS } from '../actions/ActionTypes';
import { getChefs } from '../api/get_data';

const INITIAL_STATE = {
	chefs: [{"id": 0, "name":"Rosalita"}]
};

export default function chefReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

	  case GET_CHEFS:
	    return state.chefs.concat(getChefs());

	  default:
	    return state;

  }
}
