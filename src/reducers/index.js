import { combineReducers } from "redux";
import cartReducer from "./cartReducer";
import products from "./products";

export default combineReducers({
  products,
  cartReducer,
});
