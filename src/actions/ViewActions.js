import { VIEW_CHEF, VIEW_MEAL, VIEW_COMMENT } from '../constants/ActionTypes';

export function viewChef(chef) {
  return {
    type: INCREMENT_COUNTER,
    chef: chef
  };
}

export function viewMeal(meal) {
  return {
    type: INCREMENT_COUNTER,
    meal: meal
  };
}

export function viewComment(comment) {
  return {
    type: INCREMENT_COUNTER,
    comment: comment
  };
}