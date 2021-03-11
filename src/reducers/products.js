import {
  GET_PRODUCTS,
  INCR_PRODUCT,
  DCR_PRODUCT,
  UPDATE_CHECKOUT_PRICE,
  REMOVE_PRODUCT,
} from "../actions/types";
import momos from "../MockData/momos.jpg";
import potatoes from "../MockData/potatoes.jpg";
import breakfast from "../MockData/breakfast.jpg";

import update from "react-addons-update";

const initialState = {
  products: [
    {
      id: 1,
      name: "Chicken Momo",
      price: 10.5,
      TotalPrice: 10.5,
      image: momos,
      quantity: 1,
    },
    {
      id: 2,
      name: "Spicy potatoes",
      price: 8.5,
      TotalPrice: 8.5,
      image: potatoes,
      quantity: 1,
    },
    {
      id: 3,
      name: "Breakfast    ",
      price: 5.9,
      TotalPrice: 5.9,
      image: breakfast,
      quantity: 1,
    },
  ],
  CheckoutPrice: 24.9,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case GET_PRODUCTS:
      return {
        ...state,
      };
    case INCR_PRODUCT:
      return {
        ...state,
        products: state.products.map((prd, it) =>
          action.payload.id === prd.id
            ? {
                ...prd,
                quantity: prd.quantity + 1,
                TotalPrice: prd.price * (prd.quantity + 1),
              }
            : prd
        ),
      };

    case DCR_PRODUCT:
      return {
        ...state,
        products: state.products.map((prd, it) =>
          action.payload.id === prd.id && prd.quantity > 1
            ? {
                ...prd,
                quantity: prd.quantity - 1,
                TotalPrice: prd.price * (prd.quantity - 1),
              }
            : prd
        ),
      };
    case UPDATE_CHECKOUT_PRICE:
      return {
        ...state,
        CheckoutPrice: state.products
          .map((product, id) => product.TotalPrice)
          .reduce((total, num) => total + num),
      };
    case REMOVE_PRODUCT:
      return {
        ...state,
        products: state.products.map((prd, it) =>
          action.payload.id === prd.id && prd.quantity > 1
            ? {
                ...prd,
                quantity: 0,
                TotalPrice: prd.price * 0,
              }
            : prd
        ),
      };
    default:
      return state;
  }
}
