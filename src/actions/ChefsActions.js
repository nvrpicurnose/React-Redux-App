import { GET_CHEFS } from './ActionTypes';

export function getChefsSuccess() {
	console.log("Getting chefs...");
  return {
    type: GET_CHEFS
  };
}