import { POST_MEAL, EDIT_MEAL, MEAL_LIST } from '../constants/ActionTypes';

export function postMeal() {
  return {
    type: POST_MEAL
  };
}

export function editMeal() {
  return {
    type: EDIT_MEAL
  };
}

export function mealList() {
  return {
    type: MEAL_LIST
  };
}