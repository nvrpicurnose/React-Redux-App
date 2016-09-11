import { VIEW_CHEF, VIEW_MEAL, VIEW_COMMENT } from '../actions/ActionTypes';

const INITIAL_STATE = {
	selectedChef: null,
	selectedMeal: null,
	selectedComment: null
};

export default function viewReducer(state = INITIAL_STATE, action) {
  switch (action.type) {

	  case VIEW_CHEF:
	    return state.chef = action.chef;

	  case VIEW_MEAL:
	    return state.meal = action.meal;

	  case VIEW_COMMENT:
	    return state.comment = comment;

	  default:
	    return state;

  }
}
