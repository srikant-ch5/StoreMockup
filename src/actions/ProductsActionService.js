import { GET_PRODUCTS } from "./types";
import {
  GetProducts_Action,
  IncrProduct_Action,
  DcrProduct_Action,
  UpdtCheckoutPrice_Action,
  RemoveProduct_Action,
} from "./actions";

export const get_products = () => async (dispatch, getState) => {
  try {
    dispatch(GetProducts_Action);
  } catch (error) {
    console.log(error);
  }
};

export const incrProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch(IncrProduct_Action(product));
  } catch (error) {
    console.log(error);
  }
};

export const dcrProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch(DcrProduct_Action(product));
  } catch (error) {
    console.log(error);
  }
};

export const updateCheckoutPrice = () => async (dispatch, getState) => {
  try {
    dispatch(UpdtCheckoutPrice_Action());
  } catch (error) {
    console.log(error);
  }
};

export const removeProduct = (product) => async (dispatch, getState) => {
  try {
    dispatch(RemoveProduct_Action(product));
  } catch (error) {
    console.log(error);
  }
};
