import { SUBSCRIBE_MEAL, DECREASE_WALLET } from '../constants/ActionTypes';

export function subscribeMeal(mealId) {
  return {
    type: SUBSCRIBE_MEAL,
    mealId: mealId
  };
}

export function decreaseWallet(userId, amount) {
  return {
    type: DECREASE_WALLET,
    userId: userId,
    amount: amount
  };
}