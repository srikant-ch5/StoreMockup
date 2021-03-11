import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions/types";

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
      };
    default:
      return state;
  }
}
