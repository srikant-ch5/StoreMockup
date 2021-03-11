import {
  GET_PRODUCTS,
  INCR_PRODUCT,
  DCR_PRODUCT,
  UPDATE_CHECKOUT_PRICE,
  REMOVE_PRODUCT,
} from "./types";

export const GetProducts_Action = {
  type: GET_PRODUCTS,
  payload: [],
};

export const IncrProduct_Action = (product) => {
  return {
    type: INCR_PRODUCT,
    payload: product,
  };
};

export const DcrProduct_Action = (product) => {
  return {
    type: DCR_PRODUCT,
    payload: product,
  };
};

export const UpdtCheckoutPrice_Action = () => {
  return {
    type: UPDATE_CHECKOUT_PRICE,
    payload: [],
  };
};

export const RemoveProduct_Action = (product) => {
  return {
    type: REMOVE_PRODUCT,
    payload: product,
  };
};
